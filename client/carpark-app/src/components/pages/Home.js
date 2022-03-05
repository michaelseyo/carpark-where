import React from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Home() {
  let navigate = useNavigate();

  const getAvailability = async () => {
    const res = await fetch("/api/availability", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
    const json = await res.json();

    if (json.message === "Auth failed") {
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  return (
    <Grid
      align="center"
      sx={{
        marginTop: 5,
      }}
    >
      <Typography variant="h4">Welcome!</Typography>
      <Button onClick={getAvailability}>Retrieve Carpark Data</Button>
    </Grid>
  );
}
