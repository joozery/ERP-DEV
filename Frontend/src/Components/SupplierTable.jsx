import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const SupplierTable = () => {
  return (
    <Box className="table-container">
      <Typography variant="h4" gutterBottom>
        ซัพพลายเออร์
      </Typography>
      <TableContainer component={Paper}>
        <Table className="supplier-table">
          <TableHead>
            <TableRow>
              <TableCell>เลขที่</TableCell>
              <TableCell>บริษัท</TableCell>
              <TableCell>ที่อยู่</TableCell>
              <TableCell>ข้อมูล</TableCell>
              <TableCell>เว็บไซต์</TableCell>
              <TableCell>การกระทำ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Sample Data Row */}
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>ชื่อบริษัท</TableCell>
              <TableCell>99 ถนนพหลโยธิน อำเภอคลองหลวง ปทุมธานี 12120</TableCell>
              <TableCell>086-345-7894<br />จอห์น@gmail.com</TableCell>
              <TableCell>เว็บไซต์</TableCell>
              <TableCell className="actions-container">
                <Button variant="contained" color="primary" size="small" startIcon={<EditIcon />}>
                  แก้ไข
                </Button>
                <Button variant="contained" color="secondary" size="small" startIcon={<DeleteIcon />} style={{ marginLeft: 8 }}>
                  ลบ
                </Button>
              </TableCell>
            </TableRow>
            {/* End of Sample Data Row */}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SupplierTable;
