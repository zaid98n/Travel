import React, { Component } from 'react';
import { View, Text, StyleSheet, statusbar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../components/Home';
import Feeds from '../components/Feeds';
import Search from '../components/Search';
import Chat from '../components/Chat';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles'

const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator style={{ paddingTop: StatusBar.currentHeight }}>
            <Tab.Screen
                options={{
                    title: ({ focused }) =>
                        <Icon name="home" size={24} color={focused ? 'blue' : 'black'} />
                }} component={Home} name='Home' />
            <Tab.Screen
                options={{
                    title: ({ focused }) =>
                        <Icon name="rss" size={24} color={focused ? 'blue' : 'black'} />
                }} component={Feeds} name='Feeds' />
            <Tab.Screen
                options={{
                    title: ({ focused }) =>
                        <Icon name="search" size={24} color={focused ? 'blue' : 'black'} />
                }} component={Search} name='Search' />
            <Tab.Screen
                options={{
                    title: ({ focused }) =>
                        <Icon name="comments" size={24} color={focused ? 'blue' : 'black'} />
                }} component={Chat} name='Chat' />
        </Tab.Navigator>
    )
}

export default AppNavigator;