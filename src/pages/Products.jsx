import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProductsData from './ProductsData.json';
const Products = () => {
  const rows = ProductsData?.products || [];
  console.log('rows', rows);
  return (
    <>
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">DiscountPercentage</TableCell>
              <TableCell align="center">Stock</TableCell>
              <TableCell align="center">Brand</TableCell>
              {/* <TableCell align="right">images</TableCell> */}

            </TableRow>
          </TableHead>
          <TableBody >
            {rows.map((row) => (
              <TableRow key={row.id} >
                {row.id && <TableCell align="right">{row.id}</TableCell>}
                {row.title && <TableCell align="right">{row.title}</TableCell>}
                {row.description && <TableCell align="left">{row.description}</TableCell>}
                {row.price && <TableCell align="right">{row.price}</TableCell>}
                {row.discountPercentage && <TableCell align="right">{row.discountPercentage}</TableCell>}
                {row.stock && <TableCell align="right">{row.stock}</TableCell>}
                {row.brand && <TableCell align="right">{row.brand}</TableCell>}
                {/* {row.stock && <TableCell align="right">{row.images}</TableCell>} */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </> 
  );
};
export default Products;

 


