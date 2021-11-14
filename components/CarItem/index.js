import React from 'react';
import { ImageBackground, Text, View } from 'react-native';

import styles from './styles';
import Button from '../Button/index';

const CarItem = (props) => {
	const { name, tagline, taglineCTA, image } = props.car;

	return (
		<View style={styles.carContainer}>
			<ImageBackground source={image} style={styles.backgroundImage} />
			<View style={styles.titles}>
				<Text style={styles.title}>{name}</Text>
				<Text style={styles.subtitle}>
					{tagline}{' '}
					<Text style={styles.subtitleCTA}>{taglineCTA}</Text>
				</Text>
			</View>

			<View style={styles.buttonWrap}>
				<Button
					title='Custom Order'
					type='primary'
					onPress={() => {
						console.warn('Custom Order was pressed');
					}}
				/>
				<Button
					title='Existing Inventory'
					type='secondary'
					onPress={() => {
						console.warn('Existing Inventory was pressed');
					}}
				/>
			</View>
		</View>
	);
};

export default CarItem;
