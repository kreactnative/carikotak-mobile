import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Tabs, Tab } from 'native-base';

import styles from './styles';
import TabProduct from './TabProduct';
import TabStory from './TabStory';

class FeedContentTab extends Component {

	render () {
		return (
			<Tabs locked={true} tabBarUnderlineStyle={ StyleSheet.flatten(styles.tabUnderlineStyle) }>
				<Tab heading="CERITA"
					tabStyle={ StyleSheet.flatten(styles.tabStyle) }
					textStyle={ StyleSheet.flatten(styles.tabTextStyle) }
					activeTabStyle={ StyleSheet.flatten(styles.tabStyle) }
					activeTextStyle={ StyleSheet.flatten(styles.tabActiveTextStyle) }>
					<TabStory />
				</Tab>
				<Tab heading="KOTAK"
					tabStyle={ StyleSheet.flatten(styles.tabStyle) }
					textStyle={ StyleSheet.flatten(styles.tabTextStyle) }
					activeTabStyle={ StyleSheet.flatten(styles.tabStyle) }
					activeTextStyle={ StyleSheet.flatten(styles.tabActiveTextStyle) }>
					<TabProduct />
				</Tab>
			</Tabs>
		);
	}

}

export default FeedContentTab;
