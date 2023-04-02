import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { userSingleDetails } from "../../Redux/Actions/ServiceAction";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

export default function AddressForm() {
  const dispatch = useDispatch();
  const singleData = useSelector((state) => state.singleData);
  const { user } = singleData;

  useEffect(() => {
    dispatch(userSingleDetails());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Link to="/service">
        <ArrowBackIcon className="mb-3" />
      </Link>

      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField required name="fname" value={user.fname} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required name="email" value={user.email} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address1"
            name="address1"
            label="Address line"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required name="zip" label="Zip / Postal code" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required name="country" label="Country" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
