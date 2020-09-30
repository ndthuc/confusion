import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ContactUS from './ContactUsComponent';
import AboutUS from './AboutUsComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';

const ContactUsNavigator = createStackNavigator();
function ContactUsNavigatorScreen() {
  return (
    <ContactUsNavigator.Navigator
      initialRouteName='Contact Us'
      screenOptions={{
        headerStyle: { backgroundColor: '#512DA8' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}
    >
      <ContactUsNavigator.Screen name='Contact Us' component={ContactUS} />
    </ContactUsNavigator.Navigator>
  )
}

const AboutUsNavigator = createStackNavigator();
function AboutUsNavigatorScreen() {
  return (
    <AboutUsNavigator.Navigator
      initialRouteName='About Us'
      screenOptions={{
        headerStyle: { backgroundColor: '#512DA8' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}
    >
      <AboutUsNavigator.Screen name='About Us' component={AboutUS} />
    </AboutUsNavigator.Navigator>
  )
}

const HomeNavigator = createStackNavigator();
function HomeNavigatorScreen() {
  return (
    <HomeNavigator.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: { backgroundColor: '#512DA8' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}>
      <HomeNavigator.Screen name='Home' component={Home} />
    </HomeNavigator.Navigator>
  );
}

const MenuNavigator = createStackNavigator();
function MenuNavigatorScreen() {
  return (
    <MenuNavigator.Navigator
      initialRouteName='Menu'
      screenOptions={{
        headerStyle: { backgroundColor: '#512DA8' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}>
      <MenuNavigator.Screen name='Menu' component={Menu} />
      <MenuNavigator.Screen name='Dishdetail' component={Dishdetail} options={{ headerTitle: 'Dish Detail' }} />
    </MenuNavigator.Navigator>
  );
}

const MainNavigator = createDrawerNavigator();
function MainNavigatorScreen() {
  return (
    <MainNavigator.Navigator initialRouteName='Home'>
      <MainNavigator.Screen name='Home' component={HomeNavigatorScreen} />
      <MainNavigator.Screen name='About Us' component={AboutUsNavigatorScreen} />
      <MainNavigator.Screen name='Menu' component={MenuNavigatorScreen} />
      <MainNavigator.Screen name='Contact Us' component={ContactUsNavigatorScreen} />
    </MainNavigator.Navigator>
  );
}

class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <MainNavigatorScreen />
      </NavigationContainer>
    );
  }
}
export default Main;