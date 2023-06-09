import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import { Link } from "react-router-dom";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className="mb-5">
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required label="Name on card" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required label="Card number" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required label="Expiry date" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
