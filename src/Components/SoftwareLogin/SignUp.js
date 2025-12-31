import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  MenuItem,
} from "@mui/material";

export default function SignUp({ onSwitch }) {
  const countryCodes = [
    { code: "+92", label: "PK" },
    { code: "+971", label: "UAE" },
    { code: "+44", label: "UK" },
    { code: "+1", label: "US" },
    { code: "+91", label: "IN" },
  ];

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
          Sign Up
        </Typography>

        <TextField fullWidth label="Full Name" margin="normal" />

        <TextField
          fullWidth
          label="Phone Number"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TextField
                  select
                  defaultValue="+92"
                  variant="standard"
                  sx={{ minWidth: 70 }}
                >
                  {countryCodes.map((country) => (
                    <MenuItem key={country.code} value={country.code}>
                      {country.label} {country.code}
                    </MenuItem>
                  ))}
                </TextField>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          label="Email Address"
          type="email"
          margin="normal"
        />

        <TextField fullWidth label="Username" margin="normal" />

        <TextField fullWidth label="Password" type="password" margin="normal" />

        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={{ mt: 3, backgroundColor: "#0F68A9" }}
        >
          Create Account
        </Button>

        <Typography variant="body2" mt={2} sx={{ color: "#06395dff" }}>
          Already have an account?{" "}
          <Box
            component="span"
            sx={{ color: "#0F68A9", cursor: "pointer", fontWeight: 500 }}
            onClick={onSwitch}
          >
            Login
          </Box>
        </Typography>
      </Box>
    </Grid>
  );
}
