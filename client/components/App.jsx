import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAppBar from '../components/MyAppBar.jsx';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <MyAppBar />
      </MuiThemeProvider>
    );
  }
}

export default App;
