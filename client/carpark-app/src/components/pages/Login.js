import React from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import LockOpenIcon from "@mui/icons-material/LockOpen";

export default function Login() {
  let navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/register");
  };

  const gridStyle = {
    margin: "60px",
  };
  const paperStyle = {
    padding: "40px",
    height: "30vh",
    minHeight: "320px",
    width: 260,
    margin: "20px auto",
  };
  const avatarStyle = {
    backgroundColor: "#1976d2",
  };
  const btnStyle = {
    margin: "16px 0",
  };

  return (
    <Grid sx={gridStyle}>
      <Paper elevation={10} sx={paperStyle}>
        <Grid align="center">
          <Avatar sx={avatarStyle}>
            <LockOpenIcon />
          </Avatar>
          <Typography variant="h5">Login</Typography>
          <TextField
            label="Email"
            variant="standard"
            placeholder="Enter email"
            fullWidth
            required
          />
          <TextField
            label="Password"
            variant="standard"
            placeholder="Enter password"
            fullWidth
            type="password"
            required
          />
          <Button type="submit" fullWidth variant="contained" sx={btnStyle}>
            Log In
          </Button>
          <Typography>
            Don't have an account?
            <Link
              sx={{ margin: "5px" }}
              underline="none"
              onClick={handleSignUp}
            >
              Sign Up
            </Link>
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
}
