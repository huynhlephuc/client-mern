import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useStyles from '../../style.js';
import axios from 'axios';

export default function Create() {
  const classes = useStyles();
  const [student, setStudent] = useState({
    regNo: 0,
    studentName: '', 
    grade: '',
    section: ''
  });

  async function createStudent() {

    try {

     
      axios({
        url: 'http://localhost:5000/students',
        method: 'POST',
        data: student,
        headers: {
        'Content-Type':' application/json',

        }
        
      })
      setStudent({
        regNo: 0,
        studentName: '', 
        grade: '',
        section: ''
      })
      /* .then(()=>{
        window.location.reload(false);
      }) */
      
    } catch (error) {
      console.log('error from fetch', error.message);
    }
  }

  return (
    <>
       <h2>Create User</h2>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          
          <TextField id="standard-basic" label="Registeration No." variant="standard" value={student.regNo} onChange={(e) => {
            setStudent({...student, regNo: e.target.value})
          }}/>
          <TextField id="standard-basic" label="Name" variant="standard" value={student.studentName} onChange={(e) => {
            setStudent({...student, studentName: e.target.value})
          }}/>
          <TextField id="standard-basic" label="Grade" variant="standard" value={student.grade} onChange={(e) => {
            setStudent({...student, grade: e.target.value})
          }}/>
          <TextField id="standard-basic" label="Section" variant="standard" value={student.section} onChange={(e) => {
            setStudent({...student, section: e.target.value})
          }}/>

          <Button variant="contained" color="success" onClick={createStudent}>
            Create
          </Button>
        </Box>
    </>
  );
}
