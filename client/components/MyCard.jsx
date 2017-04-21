import Avatar from 'material-ui/Avatar';
import {Card, CardHeader, CardTitle, CardMedia, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import React, {Component} from 'react';

const style = {
  card: {
    display: 'inline-block',
    minHeight: '200px',
    margin: '10px',
    position: 'relative',
    width: '300px',
    verticalAlign: 'top'
  },
  cardHeader: {
    avatar: {
      backgroundColor: 'pink'
    },
    title: {
      fontSize: '14px',
      lineHeight: '20px'
    }
  },
  cardTitle: {
    fontSize: '20px',
    lineHeight: '24px',
    textAlign: 'center'
  }
}

export default class MyCard extends React.Component {
  // Used to determine if card should display expand
  hasCardText() {
    return this.props.cardText.length > 0;
  }
  // Used to determine if CardMedia should be displayed
  hasImgSrc(imgSrc) {
    // If the card has an image,
    return imgSrc ?
      // ..then use the overlay on the picture and..insert the picture.
      <CardMedia overlay={<CardTitle title={this.props.cardTitle} />}>
        <img src={this.props.imgSrc} />
      </CardMedia>
      // Otherwise, just use the card title.
    : <CardTitle title={this.props.cardTitle} titleStyle={style.cardTitle} />;
  }

  render() {
    return(
      <Card key={this.props.cardKey} style={style.card}>
        <CardHeader title={this.props.cardHeader.title}
          subtitle={this.props.cardHeader.subtitle}
          actAsExpander={this.hasCardText()}
          showExpandableButton={this.hasCardText()}
          avatar={<Avatar style={style.cardHeader.avatar} />}
          style={style.cardHeader}
          titleStyle={style.cardHeader.title} />
        {this.hasImgSrc(this.props.imgSrc)}
        <CardText expandable={this.hasCardText()}>{this.props.cardText}</CardText>
      </Card>
    );
  }
}
