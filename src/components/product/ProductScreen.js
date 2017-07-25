import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import { startLoadingSpin, stopLoadingSpin } from 'actions/spinnerAction';

import ProgressBarContainer from 'components/_shared/progress-bar/ProgressBarContainer';
import { API } from 'services/APIService';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    startSpin: () => {
      dispatch(startLoadingSpin());
    },
    stopSpin: () => {
      dispatch(stopLoadingSpin());
    }
  };
};

class ProductScreen extends Component {
  constructor(props) {
    super(props);

    this._onGetProduct = this._onGetProduct.bind(this);
  }

  _onGetProduct() {
    this.props.startSpin();
  }

  componentWillMount() {
    this._onGetProduct();
  }

  render() {
    return (
      <Container>
        <ProgressBarContainer />
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);
