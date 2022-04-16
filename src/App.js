import logo from './logo.svg';
import { Container, AppBar, Typography, Grow } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Student from '../src/components/showStudent/showStudent.js';
import Create from './components/createStudent/createStudent.js'
import './App.css';
import useStyles from './style.js';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Container maxWidth="lg">
          <Typography className={classes.heading} variant="h2" align="center">Create and show students</Typography>
        <Grow in>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={7}>
                  <Item><Student /></Item>
              </Grid>
              <Grid item xs={12} sm={4}>
                    <Item><Create /></Item>
              </Grid>

            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
