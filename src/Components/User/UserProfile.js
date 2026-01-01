import {
  Avatar,
  Box,
  Divider,
  Grid,
  Container,
  Paper,
  Typography,
} from "@mui/material";

export default function UserProfile() {
  // Later this data will come from API
  const user = {
    name: "Muhammad Ahmed",
    username: "ahmed_dev",
    email: "ahmed@example.com",
    phone: "+92 300 1234567",
    role: "User",
    password: "@ahmed123",
  };

  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight={500}
        sx={{ color: "#06395dff" }}
        mb={2}
      >
        My Profile
      </Typography>

      <Paper elevation={2} sx={{ p: 3, maxWidth: 700 }}>
        {/* Top Section */}
        <Box display="flex" alignItems="center" mb={3}>
          <Avatar
            sx={{
              width: 80,
              height: 80,
              bgcolor: "#0F68A9",
              fontSize: 32,
              mr: 2,
            }}
          >
            {user.name.charAt(0)}
          </Avatar>

          <Box>
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{ color: "#06395dff" }}
            >
              {user.name}
            </Typography>
            <Typography color="text.secondary">@{user.username}</Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Details Section */}
        <Container sx={{ display: "flex", padding: "0" }}>
          <Box
            container
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              border: "3px dotted rgba(222, 223, 223, 1)",
              borderRadius: "10px",
              backgroundColor: "#cbf5ff",
              padding: "15px",
              margin: "0 15px 0 0",
              width: "50%",
              justifyContent: "space-around",
              height: "150px",
            }}
          >
            <ProfileItem label="Full Name" value={user.name} />
            <ProfileItem label="Email" value={user.email} />
            <ProfileItem label="Phone" value={user.phone} />
          </Box>
          <Box
            container
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              border: "3px dotted rgba(222, 223, 223, 1)",
              borderRadius: "10px",
              backgroundColor: "#cbf5ff",
              padding: "15px",
              width: "50%",
              justifyContent: "space-around",
              height: "150px",
              margin: "0 0 0 15px",
            }}
          >
            <ProfileItem label="Username" value={user.username} />
            <ProfileItem label="Password" value={user.password} />
            <ProfileItem label="Role" value={user.role} />
          </Box>
        </Container>
      </Paper>
    </Box>
  );
}

/* ---------- Reusable Row Component ---------- */
function ProfileItem({ label, value }) {
  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      <Typography fontWeight={500}>{value}</Typography>
    </Grid>
  );
}
