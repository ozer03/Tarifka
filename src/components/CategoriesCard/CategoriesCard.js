import React from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoriesCard.style';

const CategoriesCard = ({category, onSelect}) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <View style={styles.inner_container}>
                    <Image style={styles.image} source={{uri : category.strCategoryThumb}}/>
                    <Text style={styles.title}>{category.strCategory}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
        
    )
}

export default CategoriesCard;