import {
  Box,
  Button,
  Container,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

export default function CreateComplaint() {
  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight={500}
        sx={{ color: "#06395dff" }}
        mb={2}
      >
        Submit a Complaint
      </Typography>

      <Paper elevation={2} sx={{ padding: "20px 0", maxWidth: 600 }}>
        <Container container spacing={2}>
          {/* Complaint Title */}
          <Box item xs={12} sx={{ width: "100%" }}>
            <TextField
              fullWidth
              label="Complaint Title"
              placeholder="Short summary of your issue"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "20px 0",
            }}
          >
            {/* Category */}
            <Box item xs={20} sm={6} sx={{ width: "49%" }}>
              <TextField select fullWidth label="Category">
                <MenuItem value="network">Network</MenuItem>
                <MenuItem value="electricity">Electricity</MenuItem>
                <MenuItem value="water">Water</MenuItem>
                <MenuItem value="billing">Billing</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
            </Box>

            {/* Priority */}
            <Box item xs={20} sm={6} sx={{ width: "49%" }}>
              <TextField select fullWidth label="Priority">
                <MenuItem value="low">Low</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="high">High</MenuItem>
              </TextField>
            </Box>
          </Box>

          {/* Description */}
          <Box item xs={12}>
            <TextField
              fullWidth
              label="Complaint Description"
              multiline
              rows={4}
              placeholder="Describe the issue in detail"
            />
          </Box>

          {/* Submit Button */}
          <Box item xs={12} sx={{ width: "100%" }}>
            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{ backgroundColor: "#0F68A9", margin: "20px 0 0" }}
            >
              Submit Complaint
            </Button>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
}
