import React from 'react';
import { Icon } from 'native-base';

import { StackNavigator, TabNavigator } from 'react-navigation';

import LandingScreen from 'components/landing/LandingScreen';
import LoginScreen from 'components/login/LoginScreen';
import RegisterScreen from 'components/register/RegisterScreen';
import ForgotScreen from 'components/forgot/ForgotScreen';
import ProductScreen from 'components/product/ProductScreen';

import StoryScreen from 'components/story/StoryScreen';

import FavoriteScreen from 'components/favorite/FavoriteScreen';
import CreateScreen from 'components/create/CreateScreen';


import { FeedTabNavigator } from './FeedTabNavigator';
import { ProfileTabNavigator } from './ProfileTabNavigator';
import { MessageTabNavigator } from './MessageTabNavigator';

const MainNavigator = TabNavigator({

	FeedTab: {
		screen: FeedTabNavigator,
		navigationOptions: {
			tabBarLabel: 'Beranda',
			tabBarIcon: ({ tintColor }) => (
				<Icon style={{ color: tintColor }} name="ios-home-outline" />
			)
		}
	},

	FavoriteTab: {
		screen: FavoriteScreen,
		navigationOptions: {
			title: 'Favorit',
			tabBarLabel: 'Favorit',
			tabBarIcon: ({ tintColor }) => (
				<Icon style={{ color: tintColor }} name="ios-heart-outline" />
			)
		}
	},
	CreateTab: {
		screen: CreateScreen,
		navigationOptions: {
			tabBarLabel: 'Pasang',
			tabBarIcon: ({ tintColor }) => (
				<Icon style={{ color: tintColor }} name="ios-add-circle-outline" />
			)
		}
	},
	MessageTab: {
		screen: MessageTabNavigator,
		navigationOptions: {
			tabBarLabel: 'Pesan',
			tabBarIcon: ({ tintColor }) => (
				<Icon style={{ color: tintColor }} name="ios-mail-outline" />
			)
		}
	},
	ProfileTab: {
		screen: ProfileTabNavigator,
		navigationOptions: {
			tabBarLabel: 'Profil',
			tabBarIcon: ({ tintColor }) => (
				<Icon style={{ color: tintColor }} name="ios-person" />
			)
		}
	}

}, {
	tabBarPosition: 'bottom',
	swipeEnabled: false,
	lazy: false,
	animationEnabled: true,
	tabBarOptions: {
		activeTintColor: '#1ba39c',
		inactiveTintColor: '#4d4d4d',
		showIcon: true,
		pressColor: '#e8e8e8',
		labelStyle: {
			fontSize: 8,
			paddingBottom: 0
		},
		style: {
			backgroundColor: '#fff'
		},
		indicatorStyle: {
			height: 0
		},
		tabStyle: {
			paddingBottom: 0
		}
	},
	navigationOptions: {
		statusBarStyle: 'light-content'
	}
});

const AppNavigator = (signedIn = false) => StackNavigator({


	Home: {
		screen: LandingScreen,
		navigationOptions: {
			header: null
		}
	},
	Login: {
		screen: LoginScreen,
		navigationOptions: {
			headerStyle: {
				position: 'absolute',
				backgroundColor: 'transparent',
				zIndex: 100,
				top: 0,
				left: 0,
				right: 0
			}
		}
	},
	Register: {
		screen: RegisterScreen,
		navigationOptions: {
			headerStyle: {
				position: 'absolute',
				backgroundColor: 'transparent',
				zIndex: 100,
				top: 0,
				left: 0,
				right: 0
			}
		}
	},
	Forgot: {
		screen: ForgotScreen,
		navigationOptions: {
			headerStyle: {
				position: 'absolute',
				backgroundColor: 'transparent',
				zIndex: 100,
				top: 0,
				left: 0,
				right: 0
			}
		}
	},
	Main: {
		screen: MainNavigator,
		navigationOptions: {
			header: null,
			title: 'CARIKOTAK',
			headerLeft: null,
			headerTitleStyle: {
				alignSelf: 'center',
				textAlign: 'center'
			},
		}
	},
	Product: {
		screen: ProductScreen,
		navigationOptions: {
			title: 'Produk'
		}
	},
	Story: {
		screen: StoryScreen,
		navigationOptions: {
			title: 'Story'
		}
	},
}, {
	navigationOptions: {
		// header: {
		// 	style: {
		// 		elevation: 0,
		// 		shadowOpacity: 0
		// 	}
		// }
	},
	headerMode: 'float',
	initialRouteName: signedIn ? 'Main': 'Home'
});

export default AppNavigator;