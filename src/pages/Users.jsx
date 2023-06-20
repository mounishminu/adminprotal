

import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import usersData from './usersData.json';

const Users = () => {
  const rows = usersData?.Users || [];
  console.log('rows', rows);

  return (
    
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">name</TableCell>
              <TableCell align="center">language</TableCell>
              <TableCell align="center">id</TableCell>
              <TableCell align="center">bio</TableCell>
              <TableCell align="center">version</TableCell>
              {/* <TableCell align="left">email</TableCell> */}
              {/* <TableCell align="left">address</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.language}</TableCell>
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.bio}</TableCell>
                <TableCell align="left">{row.version}</TableCell>
                {/* <TableCell align="left">{row.address}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Users;



