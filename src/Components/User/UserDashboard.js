import { Grid, Typography, Paper } from "@mui/material";

export default function problemLog() {
  return (
    <>
      {/* -------- STATS BOXES -------- */}
      <Grid container spacing={3}>
        {[
          { title: "Total Complaints", value: 120 },
          { title: "Pending Complaints", value: 45 },
          { title: "Solved Complaints", value: 60 },
          { title: "In Progress", value: 15 },
        ].map((item, index) => (
          <Grid item key={index}>
            <Paper
              elevation={2}
              sx={{
                width: 220,
                height: 100,
                display: "flex",
                flexDirection: "column",
                padding: "15px 20px",
                border: "2px dotted rgba(222, 223, 223, 1)",
                borderRadius: "10px",
                boxShadow: "none",
              }}
            >
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ color: "rgb(121, 126, 133)", fontSize: "18px" }}
              >
                {item.title}
              </Typography>

              <Typography variant="h3" fontWeight={500} color="#0F68A9" mt={2}>
                {item.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
