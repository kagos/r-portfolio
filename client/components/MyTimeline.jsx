import {Divider} from 'material-ui/Divider';
import MyDeck from '../components/MyDeck.jsx';
import React, {Component} from 'react';
import {Subheader} from 'react';

const style = {

}

export default class MyTimeline extends React.Component {
  constructor(props) {
    super(props);
  }

  renderMyDecks() {
    const props = _.omit(this.props, 'years');

    // Return an array of <MyDeck> elements, with the properties from years
    return _.map(this.props.years, (year, index) =>
      <MyDeck key={index} cards={year} year={index} />
    );
  }

  render() {
    return(
      <div id='timeline'>
        {this.renderMyDecks().reverse()}
      </div>
    );
  }
}
