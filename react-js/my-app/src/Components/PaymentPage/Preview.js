import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
// import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

function Preview() {
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log("getdata item :", getdata);

  const totalPrice = getdata.reduce((price, item) => price + item.price, 0);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {getdata.map((product, index) => (
          <ListItem key={index} sx={{ py: 1, px: 0 }}>
            <img src={product.doc_img} alt="" />
            <ListItemText primary={product.s_name} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            RS. {totalPrice}
          </Typography>
        </ListItem>
      </List>
      {/* <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid> */}
      {/* <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid> */}
      {/* </Grid> */}
    </React.Fragment>
  );
}

export default Preview;
