import  { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useStyles from '../../style.js';
import axios from 'axios';
import Button from '@mui/material/Button';





export default function ShowStudent() {

  const classes = useStyles();

  const [studentList, setStudentList] = useState([]);

  const [render, setRender] = useState(false);



  useEffect( ()=> {
    axios.get('https://mern-server-api.herokuapp.com/students').then( (allStudent) => {
      setStudentList(allStudent.data);
    })
    

  },[render]);

  function handlerDelete(id) {
    axios.delete(`https://mern-server-api.herokuapp.com/students/${id}`)
    
  }

  

  return (
    <>
      
    <h2>Student List</h2>
    <TableContainer component={Paper}>
      <Button variant="contained" color="success" onClick={() => {setRender(!render)}}>
        Refresh
      </Button>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Reg Number</TableCell>
            <TableCell align="right">grade</TableCell>
            <TableCell align="right">Section</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentList.map((student, key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.studentName}
              </TableCell>
              <TableCell align="right">{student.regNo}</TableCell>
              <TableCell align="right">{student.grade}</TableCell>
              <TableCell align="right">{student.section}</TableCell>
              <TableCell align="right"><Button variant="contained" color="success" onClick={() => {handlerDelete(student._id)}}>
                delete
              </Button></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
    </TableContainer>
    </>
  );
}
