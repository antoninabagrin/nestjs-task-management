import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
const axios = require('axios');

// function createData(title, description, status) {
//   return {
//     title,
//     description,
//     status,
//   };
// }

function GetAllTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('jwt');

    const axiosTasks = async () => {
      const response = await axios.get('http://localhost:3000/tasks', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      setTasks(response.data);
    };
    axiosTasks();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{task.title}</TableCell>
              <TableCell align="right">{task.description}</TableCell>
              <TableCell align="right">{task.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// const getAllTasks = tasks.map((task) => {
//   console.log(tasks);
//   return (
//     <div>
//       <h2>{tasks.title}</h2>
//       <h3>{task.description}</h3>
//       <p>{tasks.status}</p>
//     </div>
//   );
// });

export default GetAllTasks;
