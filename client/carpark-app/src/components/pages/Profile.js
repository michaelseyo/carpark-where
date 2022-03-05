import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthProvider } from "../../store/State";

import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
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
const detailsGridStyle = {
  margin: "20px 0",
};
const dividerStyle = {
  margin: "15px 0",
};

export default function Profile() {
  let navigate = useNavigate();
  const [member, setMember] = useAuthProvider();
  const [profile, setProfile] = useState({});

  const displayMemberDetails = async () => {
    try {
      const res = await fetch(`/api/details/${member.id}`, {
        headers: {
          Authorization: `Bearer ${member.token}`,
        },
      });
      const json = await res.json();
      console.log(json);
      setProfile({
        firstName: json.firstName,
        lastName: json.lastName,
        email: json.email,
        contactNumber: json.contactNumber,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!member.isAuth) {
      navigate("/login");
      return;
    }
    displayMemberDetails();
  }, []);

  return (
    <Grid sx={gridStyle}>
      <Paper elevation={10} sx={paperStyle}>
        <Grid align="center">
          <Avatar sx={avatarStyle}>
            <AccessibilityNewIcon />
          </Avatar>
          <Typography variant="h5">My Profile</Typography>

          <Grid sx={detailsGridStyle}>
            <Divider sx={dividerStyle} textAlign="left">
              First Name
            </Divider>
            <Typography align="right">{profile.firstName}</Typography>
            <Divider sx={dividerStyle} textAlign="left">
              Last Name
            </Divider>
            <Typography align="right">{profile.lastName}</Typography>
            <Divider sx={dividerStyle} textAlign="left">
              Email
            </Divider>
            <Typography align="right">{profile.email}</Typography>
            {profile.contactNumber && (
              <>
                <Divider sx={dividerStyle} textAlign="left">
                  Contact Number
                </Divider>
                <Typography align="right">{profile.contactNumber}</Typography>
              </>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
