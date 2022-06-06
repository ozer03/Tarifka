import React from "react";
import {View, Text, FlatList} from 'react-native';
import useFetch from "../../hooks/useFetch/useFetch";
import {API_MEALS} from '../../common';

//components
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import MealCard from "../../components/MealsCard";

const Meals = ({route, navigation}) => {

    const {strCategory} = route.params;
    const {loading, error, data} = useFetch(`${API_MEALS}=${strCategory}`)

    if(loading) {
        return <Loading />
    };

    if(error) {
        return <Error />
    };

    const handleSelectFoodCard = (idMeal) => {
        navigation.navigate('DetailPage', {idMeal})
    };

    const renderMeals = ({item}) => {
        return <MealCard food={item} onSelect={() => handleSelectFoodCard(item.idMeal)}/>
    };

    const renderKey = item => item.idMeal;
    return (
        <View style={{flex : 1, backgroundColor : 'orange'}}>
            <FlatList 
            data={data.meals}
            renderItem={renderMeals}
            keyExtractor={renderKey}
            />
        </View>
    );
}

export default Meals;
