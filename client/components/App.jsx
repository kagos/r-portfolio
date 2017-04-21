import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAppBar from '../components/MyAppBar.jsx';
import MyBottomNav from '../components/MyBottomNav.jsx';
import MyTimeline from '../components/MyTimeline.jsx';
import React, {Component} from 'react';

const muiTheme = getMuiTheme({

});

const data = {
  2015: [
    {
      cardHeader: {
        title: "Front End Developer",
        subtitle: "RR Donnelley"
      },
      cardTitle: "New Position with RR Donnelley",
      cardText: "",
      date_start: new Date('2015-03-01'),
      date_end: new Date('2016-05-20'),
      category: "professional"
    },
    {
      cardHeader: {
        title: "Front End Developer",
        subtitle: "RR Donnelley"
      },
      cardTitle: "Onboarded ULTA Beauty",
      cardText: "Added +10k users and 100k products; added client-requested Win7/IE10 legacy support.",
      date_start: new Date('2015-10-01'),
      date_end: new Date('2015-10-01'),
      category: "professional"
    },
    {
      cardHeader: {
        title: "Front End Developer",
        subtitle: "RR Donnelley"
      },
      cardTitle: "Transitioned to Retail ISM Core Team",
      cardText: "Became Lead Front End Developer for Retail ISM.",
      date_start: new Date('2015-10-01'),
      date_end: new Date('2015-10-01'),
      category: "professional"
    }
  ],
  2016: [
    {
      cardHeader: {
        title: "Front End Developer",
        subtitle: "RR Donnelley"
      },
      cardTitle: "Set up server-side Less processing",
      cardText: "With server-side Less processing, we could reliably " +
        "white-label the application. Sales was able to use application-wide " +
        "customization and branding as leverage in several key negotiations.",
      date_start: new Date('2016-02-01'),
      date_end: new Date('2016-02-15'),
      category: "professional"
    },
    {
      cardHeader: {
        title: "Front End Developer",
        subtitle: "RR Donnelley"
      },
      cardTitle: "Onboarded Home Depot",
      cardText: "",
      date_start: new Date('2016-03-01'),
      date_end: new Date('2016-03-01'),
      category: "professional"
    },
    {
      cardHeader: {
        title: "",
        subtitle: ""
      },
      cardTitle: "Became a Stay-at-Home Dev",
      cardText: "",
      date_start: new Date('2016-05-20'),
      date_end: null,
      category: "professional"
    }
  ]
}

export default class App extends React.Component {
  render() {
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <MyAppBar />
          <MyTimeline years={data} />
          <MyBottomNav />
        </div>
      </MuiThemeProvider>
    );
  }
}
