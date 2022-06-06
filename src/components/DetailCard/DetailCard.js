import React from "react";
import { View, Image, Button, Linking, Text } from 'react-native';
import styles from './DetailCard.style';

const DetailCard = ({details}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri : details.strMealThumb}}/>
            <View style={styles.country_container}>
                <Text style={styles.strMeal}>{details.strMeal}</Text>
                <Text style={styles.strArea}>{details.strArea}</Text>
            </View>
            <View style={styles.des_container}>
                <Text style={styles.description}>{details.strInstructions}</Text> 
            </View>
            <View style={styles.youtube_button}>
                <Button 
                    style={styles.button}
                    title="Watch on YouTube"
                    color={'red'}
                    onPress={() => {
                        Linking.openURL(details.strYoutube)
                    }}
                />
            </View>
        </View>
    );
}

export default DetailCard;