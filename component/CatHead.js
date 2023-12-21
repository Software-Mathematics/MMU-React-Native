import { StyleSheet,View,Text } from "react-native"
import { GlobalStyles } from "../Styles/LightMode"
import { responsiveHeight } from "react-native-responsive-dimensions"
export default function CatHead({title,style}){
    return(
        <View style={[styles.container,style]}>
          <Text
            style={{
              margin: 10,
              marginBottom: 20,
              fontWeight: 'bold',
              fontSize: 20,
              color: GlobalStyles.colors.p1,
            }}>
            {title}
          </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        alignItems: 'center',
        borderBottomWidth: 0.5,
        marginHorizontal: responsiveHeight(1),
      },
})