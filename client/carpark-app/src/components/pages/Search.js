import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthProvider } from "../../store/State";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

const searchStyle = {
  margin: "20px 0",
};

export default function Search() {
  let navigate = useNavigate();
  const [member, setMember] = useAuthProvider();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAvailabilityData = async () => {
      try {
        const res = await fetch("/api/availability", {
          headers: {
            Authorization: `Bearer ${member.token}`,
            "Content-Type": "application/json",
          },
        });
        if (res.statusText === "Unauthorized") {
          setTimeout(() => {
            navigate("/login");
          }, 1000);
          return;
        }

        const json = await res.json();
        setData(
          json.data.items[0].carpark_data.map((cp) => ({
            carparkNumber: cp.carpark_number,
            carparkInfo: cp.carpark_info,
            time: cp.update_datetime,
          }))
        );
      } catch (err) {
        console.log(err);
      }
    };
    getAvailabilityData();
  }, [member]);

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
      <TextField
        label="Search by carpark number"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={searchStyle}
      />
    </Grid>
  );
}
