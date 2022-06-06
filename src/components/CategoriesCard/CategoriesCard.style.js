import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#eceff1',
        margin : 10,
        borderWidth : 1,
        borderColor : '#babdbe',
        borderRadius : 10,
        borderBottomLeftRadius : 50,
        borderTopLeftRadius : 50, 
       },
    inner_container : {
        flexDirection : 'row',
        alignItems : 'center',
    },
    image : {
        width: 100,
        minHeight : 100,
        resizeMode : 'contain',
        overflow : 'hidden',
    },
    title : {
        marginLeft : 10,
        fontWeight : 'bold',
        fontSize : 20,
    },
});