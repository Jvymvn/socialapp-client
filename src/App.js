import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import './App.css';

//Components
import Navbar from './components/Navbar';

//Routes
import home from './routes/home';
import login from './routes/login';
import signup from './routes/signup';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fb8c00',
    },
    secondary: {
      main: '#ffc107',
    },
  }
})

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        
      <Router>
        <Navbar/>
        <div className="container">
        <Switch>
          <Route exact path="/" component={home}/>
          <Route path="/login" component={login}/>
          <Route path="/signup" component={signup}/>
        </Switch>
        </div>
      </Router>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
