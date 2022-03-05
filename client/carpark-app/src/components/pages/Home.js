import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Grid
      align="center"
      sx={{
        marginTop: 5,
      }}
    >
      <Typography variant="h5">
        Retrieve information about various carparks
      </Typography>
    </Grid>
  );
}
