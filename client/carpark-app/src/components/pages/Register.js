import React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Register() {
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
                Register
            </Typography>
        </Container>
    )
}