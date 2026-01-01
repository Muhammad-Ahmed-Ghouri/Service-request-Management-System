import {
  Box,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const complaintsData = [
  {
    id: 1,
    description: "Internet not working properly",
    date: "2026-01-01",
    status: "inprogress",
  },
  {
    id: 2,
    description: "Electricity issue in block A",
    date: "2025-12-28",
    status: "completed",
  },
  {
    id: 3,
    description: "Water supply delayed",
    date: "2025-12-25",
    status: "delayed",
  },
  {
    id: 4,
    description: "Wrong billing amount",
    date: "2025-12-20",
    status: "rejected",
  },
];

const statusConfig = {
  inprogress: { label: "In Progress", color: "warning" },
  completed: { label: "Completed", color: "success" },
  rejected: { label: "Rejected", color: "error" },
  delayed: { label: "Delayed", color: "info" },
};

export default function ComplaintsList() {
  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight={500}
        sx={{ color: "#06395dff" }}
        mb={2}
      >
        My Complaints
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                fontWeight={600}
                sx={{
                  color: "rgb(121, 126, 133)",
                  fontSize: "18px",
                  backgroundColor: "none",
                }}
              >
                Complaint Description
              </TableCell>
              <TableCell
                fontWeight={600}
                sx={{
                  color: "rgb(121, 126, 133)",
                  fontSize: "18px",
                  backgroundColor: "none",
                }}
              >
                Date
              </TableCell>
              <TableCell
                fontWeight={600}
                sx={{
                  color: "rgb(121, 126, 133)",
                  fontSize: "18px",
                  backgroundColor: "none",
                }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {complaintsData.map((complaint) => (
              <TableRow key={complaint.id}>
                <TableCell sx={{ color: "#45455d" }}>
                  {complaint.description}
                </TableCell>
                <TableCell sx={{ color: "#45455d" }}>
                  {complaint.date}
                </TableCell>
                <TableCell>
                  <Chip
                    label={statusConfig[complaint.status].label}
                    color={statusConfig[complaint.status].color}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
