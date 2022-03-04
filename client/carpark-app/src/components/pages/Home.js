import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const getAvailability = async () => {
    const res = await fetch('/api/availability');
    const json = await res.json();
    console.log(json);
  }
export default function Home() {
    return (
        <Grid
            align='center'
            sx={{
                marginTop: 5
            }}
        >
            <Typography 
                variant="h4" 
            >
                Welcome!
            </Typography>
            <Button
                onClick={getAvailability}
            >
                Test
            </Button>
        </Grid>
    );
}