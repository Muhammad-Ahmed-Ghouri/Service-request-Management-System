import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import SignUp from "./SignUp";
import Login from "./Login";
import { useState } from "react";

export default function CredentialPage() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(90deg, #9BF8F4, #6F7BF7)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "900px",
          maxWidth: "95%",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <Grid container sx={{ minHeight: "500px" }}>
          {/* LEFT SIDE - BRANDING */}
          <Grid
            item
            sx={{
              background: "linear-gradient(to bottom, #7EF29D, #0F68A9)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              width: "450px",
              justifyContent: "center",
              p: 4,
            }}
          >
            <Box textAlign="center">
              {/* Replace below src with your logo image */}
              <Box
                component="img"
                src="./logo.png" // your logo here
                alt="SRMS Logo"
                sx={{ width: 120, height: 120, mb: 2 }}
              />
              <Typography
                variant="h3"
                fontWeight={700}
                sx={{ fontFamily: "Comfortaa" }}
              >
                ProblemLog
              </Typography>
              <Typography
                variant="body1"
                mt={1}
                sx={{
                  letterSpacing: "1.3px",
                  color: "#002d4dff",
                }}
              >
                Service Request Management System
              </Typography>
            </Box>
          </Grid>

          {/* RIGHT SIDE - FORM (SWITCHES) */}
          {isLogin ? (
            <SignUp onSwitch={() => setIsLogin(false)} />
          ) : (
            <Login onSwitch={() => setIsLogin(true)} />
          )}
        </Grid>
      </Paper>
    </Container>
  );
}
