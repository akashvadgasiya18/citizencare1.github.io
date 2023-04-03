const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY);

router.post("/create-checkout-session", async (req, res) => {
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
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection : {allowed_countries: ['IN']},
    "customer_email": req.body.user.email,
    line_items,
    custom_fields: [
      {
        key: 'Time',
        label: {type: 'custom', custom: 'Select time for tommorow service:'},
        optional: true,
        type: 'dropdown',
        dropdown: {
          options: [
            {label: '8 to 10', value: 'Time1'},
            {label: '10 to 12', value: 'Time2'},
            {label: '12 to 2', value: 'Time3'},
            {label: '2 to 4', value: 'Time4'},
            {label: '4 to 6', value: 'Time5'},
            {label: '6 to 8', value: 'Time6'},
          ],
        },
      },
    ],
    currency: "inr",
    mode: "payment",
    invoice_creation: {enabled: true},
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
  });
  res.send({ url: session.url });
});

module.exports = router;
