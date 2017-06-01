import React, { Component } from 'react';
import { ScrollView, Image } from 'react-native';
import { Header, Body, Title, Right, Container, Button, Icon } from 'native-base';

import styles from './styles';
import FeedFindMyBox from './FeedFindMyBox';
import SectionStory from './SectionStory';
import SectionProduct from './SectionProduct';
import logo from 'images/logo-carikotak-hijau.png';

class FeedScreen extends Component {

	render () {
		const { navigate } = this.props.navigation;

		return (
			<Container>

				<Header style={{ backgroundColor: '#fff', elevation: 1 }}>
					<Body style={{ alignItems: 'center', flex: 1}}>
						<Image source={logo} style={{ width: 100, height:15 }} />
					</Body>
					<Right style={{ position: 'absolute', right: 8 }}>
						<Button transparent dark><Icon name="ios-search" /></Button>
					</Right>
				</Header>

				<ScrollView style={styles.parentView}>
					<SectionStory />
					<FeedFindMyBox navigate={navigate} />
					<SectionProduct />
				</ScrollView>
			</Container>
		);
	}

}

export default FeedScreen;
