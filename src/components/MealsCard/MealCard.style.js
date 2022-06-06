import { Dimensions, StyleSheet } from "react-native";

const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#eceff1',
        margin : 10,
        justifyContent : 'center',
    },
    inner_container : {
        borderRadius : 10,
    },

    image_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        
      },

    image : {
        width : deviceSize.width/1.05,
        height : deviceSize.height/4,
        resizeMode: 'cover',
        flexDirection: 'column-reverse',
    },
    title_container : {
        backgroundColor : 'black',
        opacity : 0.7,
    },

    title : {
        fontWeight : 'bold',
        textAlign : 'right',
        fontSize : 20,
        color : 'white',
        marginHorizontal : 10,
        paddingVertical : 5,
    },
});