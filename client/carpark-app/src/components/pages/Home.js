import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const getAvailability = async () => {
    const res = await fetch('/api/availability');
    const json = await res.json();
    console.log(json);
  }
export default function Home() {
    return (
        <Container
            sx={{
                marginTop: 5
            }}
        >
            <Typography 
                variant="h4" 
                align="center"
            >
                Welcome!
            </Typography>
            <Button
                onClick={getAvailability}
            >
                Test
            </Button>
        </Container>
    );
}