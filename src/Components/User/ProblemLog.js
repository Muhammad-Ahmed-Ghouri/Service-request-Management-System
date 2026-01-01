import {
  Box,
  Typography,
  Avatar,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import UserDashboard from "./UserDashboard";
import UserComplains from "./UserComplains";
import NewComplain from "./NewComplain";
import UserProfile from "./UserProfile";
import list from "../../assets/list.png";
import newComplain from "../../assets/newComplain.png";
import dashboard from "../../assets/dashboard.png";
import { useState } from "react";

export default function ProblemLog() {
  const [SwitchContent, setSwitchContent] = useState("dashboard");

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "rgb(248, 249, 250)",
      }}
    >
      {/* ================= LEFT SIDEBAR ================= */}
      <Box
        sx={{
          width: 240,
          background: "linear-gradient(to bottom, #3353a0ff, #471069)",
          color: "#fff",
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            component="img"
            src="./logo.png" // your logo here
            alt="SRMS Logo"
            sx={{ width: 30, height: 30, mb: 2, marginRight: "10px" }}
          />
          <Typography
            variant="h6"
            fontWeight={700}
            mb={3}
            sx={{ fontFamily: "Comfortaa" }}
          >
            ProblemLog
          </Typography>
        </Box>

        <List>
          <ListItemButton onClick={() => setSwitchContent("dashboard")}>
            <Box
              component="img"
              src={dashboard} // your logo here
              alt="SRMS Logo"
              sx={{ width: 25, height: 25, mb: 2, margin: "10px 10px 10px" }}
            />
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton onClick={() => setSwitchContent("complains")}>
            <Box
              component="img"
              src={list} // your logo here
              alt="SRMS Logo"
              sx={{ width: 25, height: 25, mb: 2, margin: "10px 10px 10px" }}
            />
            <ListItemText primary="Complaints" />
          </ListItemButton>

          <ListItemButton onClick={() => setSwitchContent("newComplain")}>
            <Box
              component="img"
              src={newComplain} // your logo here
              alt="SRMS Logo"
              sx={{ width: 25, height: 25, mb: 2, margin: "10px 10px 10px" }}
            />
            <ListItemText primary="Place new Complain" />
          </ListItemButton>
        </List>
      </Box>

      {/* ================= RIGHT CONTENT ================= */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {/* -------- TOP BAR -------- */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            mb: 2,
            cursor: "pointer",
          }}
          onClick={() => setSwitchContent("myProfile")}
        >
          <Avatar sx={{ bgcolor: "#0F68A9", marginRight: "10px" }}>A</Avatar>
          <Typography mr={1} fontWeight={500}>
            MuhammadAhmed
          </Typography>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {SwitchContent === "dashboard" ? (
          <UserDashboard />
        ) : SwitchContent === "complains" ? (
          <UserComplains />
        ) : SwitchContent === "newComplain" ? (
          <NewComplain />
        ) : SwitchContent === "myProfile" ? (
          <UserProfile />
        ) : (
          <UserDashboard />
        )}
      </Box>
    </Box>
  );
}
