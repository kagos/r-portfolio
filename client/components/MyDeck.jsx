import _ from 'lodash';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import MyCard from '../components/MyCard.jsx';
import React from 'react';

const style = {
  chip: {
    backgroundColor: '#333',
    borderRadius: 2,
    margin: 5,
    labelText: {
      color: '#fff'
    }
  },
  divider: {
    backgroundColor: '#fff',
    marginTop: 50
  }
}

export default class MyCardHolder extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCards() {
    const props = _.omit(this.props, 'cards');

    // Return an array of <MyCard> elements, with the properties from cards
    return _.map(this.props.cards, (card, index) =>
      <MyCard key={index} card-key={index} {...card} {...props} />);
  }

  render() {
    return(
      <div>
        <Divider style={style.divider} />
        <Chip style={style.chip} labelColor={'#fff'}>
          {this.props.year}
        </Chip>
        {this.renderCards()}
      </div>
    );
  }
}
