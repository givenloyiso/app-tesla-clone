import React, { Component } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import styles from './styles';

const CarItem = (props) => {
	return (
		<View style={styles.carContainer}>
			<ImageBackground
				source={require('../../assets/images/ModelX.jpeg')}
				style={styles.backgroundImage}
			/>
			<View style={styles.titles}>
				<Text style={styles.title}>Model S</Text>
				<Text style={styles.subtitle}>Starting at $44.44</Text>
			</View>
		</View>
	);
};

export default CarItem;
