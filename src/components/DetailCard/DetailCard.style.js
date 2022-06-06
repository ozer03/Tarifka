import { StyleSheet, Dimensions } from "react-native";

const DeviceSize = Dimensions.get('window');
export default StyleSheet.create({
    container : {
        backgroundColor : '#eceff1',
    },
    image : {
        width : DeviceSize.width,
        height : DeviceSize.height/3,
    },
    country_container : {
        borderBottomWidth : 1,
        borderBottomColor : '#e0e0e0',
        paddingVertical : 10,
    },
    strMeal : {
        fontWeight : 'bold',
        fontSize : 25,
        color : '#bf360c',
        marginHorizontal : 5,
    },
    strArea : {
        fontWeight : 'bold',
        fontSize : 18,
        color : '#bf360c',
        marginHorizontal : 5,
    },
    des_container : {
        marginVertical : 10,
    },
    description : {
        fontSize : 16,
        marginHorizontal : 5,
    },
    youtube_button : {
        marginHorizontal : 25,
        borderRadius : 10,
        marginBottom : 10,
    },
    button : {
        borderRadius : 10,
    },
});