import React from 'react';
import AppBar from 'material-ui/AppBar';

const style = {
  appBar: {
    height: '100vh',
    left: 0,
    position: 'fixed',
    top: 0,
    zIndex: -1
  }
}

const MyAppBar = () => <AppBar zDepth={1} style={style.appBar} />;

export default MyAppBar;
