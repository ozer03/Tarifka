import React from 'react';
import {Text, View, ImageBackground, TouchableWithoutFeedback} from 'react-native';
import styles from './MealCard.style';

const MealCard = ({food, onSelect}) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <View style={styles.inner_container}>
                <View style={styles.image_container}>
                    <ImageBackground style={styles.image} source={{uri : food.strMealThumb}}/>
                </View>
                <View style={styles.title_container}>
                <   Text style={styles.title}>{food.strMeal}</Text>
                </View>
                
                </View>
            </View>
        </TouchableWithoutFeedback>
        
    )
}

export default MealCard;