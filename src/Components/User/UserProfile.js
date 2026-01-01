import { Avatar, Box, Divider, Grid, Paper, Typography } from "@mui/material";

export default function UserProfile() {
  // Later this data will come from API
  const user = {
    name: "Muhammad Ahmed",
    username: "ahmed_dev",
    email: "ahmed@example.com",
    phone: "+92 300 1234567",
    role: "User",
    joinedOn: "01 Jan 2026",
  };

  return (
    <Box>
      <Typography variant="h5" fontWeight={600} mb={2}>
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
            <Typography variant="h6" fontWeight={600}>
              {user.name}
            </Typography>
            <Typography color="text.secondary">@{user.username}</Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Details Section */}
        <Grid container spacing={2}>
          <ProfileItem label="Full Name" value={user.name} />
          <ProfileItem label="Username" value={user.username} />
          <ProfileItem label="Email" value={user.email} />
          <ProfileItem label="Phone" value={user.phone} />
          <ProfileItem label="Role" value={user.role} />
          <ProfileItem label="Joined On" value={user.joinedOn} />
        </Grid>
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
