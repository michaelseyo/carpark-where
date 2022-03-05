import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthProvider } from "../../store/State";

import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

import CarparkList from "../CarparkList";
import "../../loader.css";

const searchStyle = {
  margin: "30px 0",
  minWidth: "300px",
  width: "40vw",
  maxWidth: "700px",
};

export default function Search() {
  let navigate = useNavigate();
  const [member, setMember] = useAuthProvider();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  const filterData = (input) => {
    setFilteredData(
      data.filter((cp) => {
        return cp.carparkNumber.toLowerCase().includes(input);
      })
    );
  };

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
        setLoading(true);
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
        margin: 5,
      }}
    >
      <Typography variant="h5">Retrieve information</Typography>
      <TextField
        label="By carpark number"
        variant="outlined"
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={(e) => filterData(e.currentTarget.value)}
        sx={searchStyle}
      />
      <Divider />
      {!loading && (
        <Typography sx={{ margin: "20px 0" }} variant="h5" className="loader">
          ...
        </Typography>
      )}
      <CarparkList
        filteredData={filteredData.length === 0 ? data : filteredData}
      />
    </Grid>
  );
}
