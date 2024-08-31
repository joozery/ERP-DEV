import React from 'react';
import {
  Typography,
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const Suppliers = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">Suppliers</Typography>
        <Button variant="contained" color="primary">+ Add</Button>
      </Box>

      <Box display="flex" justifyContent="space-between" mb={3}>
        <Box display="flex" flexDirection="column" alignItems="center" p={2} component={Paper}>
          <Typography variant="h6">Total</Typography>
          <Typography variant="h4">120</Typography>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" p={2} component={Paper}>
          <Typography variant="h6">Changed</Typography>
          <Typography variant="h4">11</Typography>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" p={2} component={Paper}>
          <Typography variant="h6">Expired</Typography>
          <Typography variant="h4">5</Typography>
        </Box>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Info</TableCell>
              <TableCell>Website</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Example row */}
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Company name</TableCell>
              <TableCell>99 Phahonyothin Road, Khlong Luang District, Pathum Thani 12120</TableCell>
              <TableCell>
                <Typography>086-345-7894</Typography>
                <Typography>john@gmail.com</Typography>
              </TableCell>
              <TableCell>website</TableCell>
              <TableCell>
                <IconButton color="primary">
                  <Edit />
                </IconButton>
                <IconButton color="secondary">
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
            {/* เพิ่มแถวเพิ่มเติมตามที่ต้องการ */}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Suppliers;
