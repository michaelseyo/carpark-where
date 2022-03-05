import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthProvider } from "../../store/State";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

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

export default function Profile() {
  return (
    <Grid sx={gridStyle}>
      <Paper elevation={10} sx={paperStyle}>
        <Grid align="center">
          <Avatar sx={avatarStyle}>
            <AccessibilityNewIcon />
          </Avatar>
          <Typography variant="h5">Not a valid path!</Typography>
        </Grid>
      </Paper>
    </Grid>
  );
}
