import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar2 from "../Navbar/Navbar2";
import Footer from "../Footer/Footer";

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }
const Login2 = () => {
  const theme = createTheme();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
      <Navbar2 />
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          maxWidth="xs"
          style={{
            border: "2px solid black",
            marginBottom: "4rem",
            backgroundColor: "white",
            padding: "30px 30px",
            borderRadius: "20px",
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ m: 2, bgcolor: "Black", height: "80px", width: "80px" }}
            >
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography
              component="h2"
              variant="h4"
              style={{ fontFamily: "Poppins", fontWeight: "600" }}
            >
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 2 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "20px",
                  fontFamily: "Poppins",
                }}
                sx={{ mt: 4, mb: 3 }}
              >
                Sign In
              </Button>
              {/* <Grid container>
                <Grid item xs>
                  <Link href="#" style={{}}>
                    Forgot password?
                  </Link>
                </Grid>
                </Grid> */}
              <Grid style={{ textAlign: "center" }}>
                <Link href="#">
                  <h5
                    style={{
                      color: "black",
                      textDecoration: "2px solid white underline",
                    }}
                  >
                    Don't have an account?
                  </h5>
                  <span>Sign Up</span>
                </Link>
              </Grid>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Container>
      </ThemeProvider>
      <Footer />
    </>
  );
};

export default Login2;
