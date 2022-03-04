import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

export default function Register() {
  const gridStyle = {
    margin: "60px 0",
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
    mb: 1,
  };
  const btnStyle = {
    margin: "20px 0",
  };

  return (
    <Grid sx={gridStyle}>
      <Paper elevation={10} sx={paperStyle}>
        <Grid align="center">
          <Avatar sx={avatarStyle}>
            <AddIcon />
          </Avatar>
          <Typography variant="h5">Create an account</Typography>
          <TextField
            label="First Name"
            variant="standard"
            placeholder="Enter first name"
            fullWidth
            required
          />
          <TextField
            label="Last Name"
            variant="standard"
            placeholder="Enter last name"
            fullWidth
            required
          />
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
          <TextField
            label="Contact Number"
            variant="standard"
            placeholder="Enter contact number"
            fullWidth
            type="password"
          />
          <Button type="submit" fullWidth variant="contained" sx={btnStyle}>
            Confirm
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
}
