import React from 'react';
import {View, Text, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';
import {API_DETAIL} from '../../common';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import DetailCard from '../../components/DetailCard';


const Detail = ({route}) => {
    const {idMeal} = route.params;

    const {loading, error, data} = useFetch(`${API_DETAIL}=${idMeal}`);

    const renderKey = item => item.idMeal;

    const renderDetail = ({item}) => <DetailCard details={item}/>

    if(loading) {
        return <Loading />
    };

    if(error) {
        return <Error />
    };

    return (
        <View>
            <FlatList 
                data={data.meals}
                renderItem = {renderDetail}
                keyExtractor ={renderKey}
            />
        </View>
    );
}

export default Detail;
