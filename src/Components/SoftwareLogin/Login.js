import { Box, Button, Grid, TextField, Typography } from "@mui/material";

export default function Login({ onSwitch }) {
  return (
    <Grid
      item
      sx={{
        display: "flex",
        alignItems: "center",
        width: "450px",
        justifyContent: "center",
        p: 4,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 360, textAlign: "center" }}>
        <Typography
          variant="h4"
          fontWeight={500}
          sx={{ color: "#06395dff" }}
          mb={1}
        >
          Login
        </Typography>

        <TextField fullWidth label="Username" margin="normal" />

        <TextField fullWidth label="Password" type="password" margin="normal" />

        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={{ mt: 3, backgroundColor: "#0F68A9" }}
        >
          Login
        </Button>

        <Typography variant="body2" mt={2} sx={{ color: "#06395dff" }}>
          Don’t have an account yet?{" "}
          <Box
            component="span"
            sx={{ color: "#0F68A9", cursor: "pointer", fontWeight: 500 }}
            onClick={onSwitch}
          >
            Sign Up
          </Box>
        </Typography>
      </Box>
    </Grid>
  );
}
