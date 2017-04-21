import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconMail from 'material-ui/svg-icons/communication/mail-outline';
import IconChat from 'material-ui/svg-icons/communication/message';
import IconCall from 'material-ui/svg-icons/communication/speaker-phone';

const mailIcon = <IconMail />;
const callIcon = <IconCall />;
const chatIcon = <IconChat />;
const cStyle = {
  left: 0,
  position: 'fixed',
  bottom: 0,
  zIndex: 100
}

class MyBottomNav extends React.Component {
  render() {
    return (
      <Paper zDepth={1} style={cStyle}>
        <BottomNavigation>
          <BottomNavigationItem icon={mailIcon} />
          <BottomNavigationItem icon={chatIcon} />
          <BottomNavigationItem icon={callIcon} />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default MyBottomNav;
