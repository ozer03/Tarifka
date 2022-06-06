import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';

//Components
import CategoriesCard from '../../components/CategoriesCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';



const Categories = ({navigation}) => {
    const {data, loading, error} = useFetch(Config.API_CATEGORY);

    if(loading) {
        return <Loading />
    };

    if(error) {
        return <Error />
    };

    const handleCategorySelect = (strCategory) => {
        navigation.navigate('MealsPage', {strCategory});
    }

    const renderCategory = ({item}) => <CategoriesCard category={item} onSelect={() => handleCategorySelect(item.strCategory)}/>;

    return (
        <View style={{backgroundColor : 'orange'}}>
            <FlatList data={data.categories} renderItem={renderCategory} keyExtractor={item => item.idCategory}/>
        </View>
    );
}

export default Categories;
