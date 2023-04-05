const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const Order = require("../models/OrderSchema");
var nodemailer = require("nodemailer");
const { json } = require("body-parser");
const stripe = Stripe(process.env.STRIPE_KEY);

router.post("/create-checkout-session", async (req, res) => {
  //customer creation
  const customer = await stripe.customers.create({
    metadata: {
      userId: req.body.userId,
      choice: req.body.choice,
      cart: JSON.stringify(req.body.getdata),
    },
  });

  //cart items
  const line_items = req.body.getdata.map((item) => {
    return {
      price_data: {
        currency: "inr",
        product_data: {
          name: item.s_name,
          images: [item.doc_img],
          metadata: {
            id: item._id,
          },
        },
        unit_amount: item.price * 100,
      },
      quantity: 1,
    };
  });

  //session creation
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    // "customer_email": req.body.user.email,
    customer: customer.id,
    shipping_address_collection: { allowed_countries: ["IN"] },
    line_items,
    mode: "payment",
    invoice_creation: { enabled: true },
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
  });
  res.send({ url: session.url });
});

//orderCreation
const createOrder = async (customer, data) => {
  const items = JSON.parse(customer.metadata.cart);
  const newOrder = new Order({
    userId: customer.metadata.userId,
    scheduale: customer.metadata.choice,
    cId: data.customer,
    paymentId: data.payment_intent,
    fname: data.customer_details.name,
    email: data.customer_details.email,
    address: data.customer_details.address,
    service: items,
    total: data.amount_total / 100,
    status: data.payment_status,
  });
  try {
    const saved = await newOrder.save();
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "shreyabundheliya2109@gmail.com",
        pass: "fbqrhmvatldjfhxi",
      },
    });

    var mailOptions = {
      from: "shreyabundheliya2109@gmail.com",
      to: "akashvadgasiya1832@gmail.com",
      subject: "Booking successfull.",
      text: JSON.stringify(saved.email, saved.total),
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    // console.log('Order: ',saved);
  } catch (err) {
    console.log(err);
  }
};

// webhook
// text: JSON.stringify(saved.total),
// to: data.customer_details.email,
// stripe listen --forward-to localhost:3001/webhook
let endpointSecret;
router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (request, response) => {
    const sig = request.headers["stripe-signature"];
    let data;
    let eventType;

    if (endpointSecret) {
      let event;
      try {
        event = stripe.webhooks.constructEvent(
          request.body,
          sig,
          endpointSecret
        );
      } catch (err) {
        response.status(400).send(`Webhook Error: ${err.message}`);
        return;
      }
      data = event.data.object;
      eventType = event.type;
    } else {
      data = request.body.data.object;
      eventType = request.body.type;
    }

    //Handle event
    if (eventType === "checkout.session.completed") {
      stripe.customers
        .retrieve(data.customer)
        .then((customer) => {
          // console.log(customer);
          createOrder(customer, data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    response.send().end();
  }
);

module.exports = router;
