// redux
import { connect } from 'react-redux';
import { postFavorite, postComent } from '../redux/ActionCreators';
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    favorites: state.favorites
  }
};

const mapDispatchToProps = dispatch => ({
  postFavorite: (dishId) => dispatch(postFavorite(dishId)),
  postComent: (dishId, rating, author, comment) => dispatch(postComent(dishId, rating, author, comment))
});

import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, LogBox, Modal, Button } from 'react-native';
import { Card, Image, Icon, Rating, Input } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';

class RenderDish extends Component {
  render() {
    const dish = this.props.dish;
    if (dish != null) {
      return (
        <Card>
          <Image source={{ uri: baseUrl + dish.image }} style={{ width: '100%', height: 100, flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Card.FeaturedTitle>{dish.name}</Card.FeaturedTitle>
          </Image>
          <Text style={{ margin: 10 }}>{dish.description}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Icon raised reverse
              name={this.props.favorite ? 'heart' : 'heart-o'}
              type='font-awesome' color='#f50'
              onPress={() => this.props.favorite ? alert('Already favorite') : this.props.onPressFavorite()}
            />
            <Icon raised reverse
              name='pencil'
              type='font-awesome' color='#512DA8'
              onPress={() => this.props.onPressComment()}
            />
          </View>
        </Card>
      );
    }
    return (<View />);
  }
}

class RenderComment extends Component {
  render() {
    const comments = this.props.comments;
    return (
      <Card>
        <Card.Title>Comments</Card.Title>
        <Card.Divider />
        <FlatList data={comments}
          renderItem={({ item, index }) => this.renderCommentItem(item, index)}
          keyExtractor={item => item.id.toString()} />
      </Card>
    )
  }
  renderCommentItem(item, index) {
    return (
      <View key={index} style={{ margin: 10 }}>
        <Text style={{ fontSize: 14 }}>{item.comment}</Text>
        <Rating startingValue={item.rating} imageSize={20} readonly style={{ flexDirection: 'row' }} />
        <Text style={{ fontSize: 12 }}>{'-- ' + item.author + ', ' + item.date} </Text>
      </View>
    );
  };
}

class Dishdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      rating: 5,
      author: '',
      comment: ''
    };
  }
  render() {
    const dishId = parseInt(this.props.route.params.dishId);
    const dish = this.props.dishes.dishes[dishId];
    const comments = this.props.comments.comments.filter((comment) => comment.dishId === dishId);
    const favorite = this.props.favorites.some(el => el === dishId);
    return (
      <ScrollView>
        <RenderDish dish={dish} favorite={favorite}
          onPressFavorite={() => this.markFavorite(dishId)}
          onPressComment={() => this.handleComment()} />
        <RenderComment comments={comments} />
        <Modal visible={this.state.showModal}>
          <View style={{ justifyContent: 'center', margin: 20 }}>
            <Rating
              startingValue={this.state.rating}
              showRating={true}
              onFinishRating={(value) => this.setState({ rating: value })}
            />
            <Input
              value={this.state.author}
              placeholder='Author'
              leftIcon={{ name: 'user-o', type: 'font-awesome' }}
              onChangeText={(text) => this.setState({ author: text })}
            />
            <Input
              value={this.state.comment}
              placeholder='Comment'
              leftIcon={{ name: 'comment-o', type: 'font-awesome' }}
              onChangeText={(text) => this.setState({ comment: text })}
            />
            <View style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <Button
                title='SUBMIT' color='#512DA8'
                onPress={() => { this.submitComment(dishId); this.resetForm() }}
              />
              <View style={{ height: 10 }} />
              <Button
                title='CANCEL' color='gray'
                onPress={() => { this.resetForm() }}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    );
  }

  markFavorite(dishId) {
    this.props.postFavorite(dishId);
  }
  handleComment() {
    this.setState({ showModal: true });
  }
  submitComment(dishId) {
    this.props.postComent(
      dishId,
      this.state.rating,
      this.state.author,
      this.state.comment
    )
  }
  resetForm() {
    this.setState({
      showModal: false,
      rating: 5,
      author: '',
      comment: ''
    })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dishdetail);