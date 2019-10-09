import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '@/actions/user';

class Home extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getUserInfo();
  }

  render() {
    return (
      <div>home</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: {
      ...bindActionCreators(bindActionCreators, dispatch),
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
