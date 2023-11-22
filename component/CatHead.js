import { StyleSheet,View,Text } from "react-native"
import { GlobalStyles } from "../Styles/LightMode"
export default function CatHead({title}){
    return(
        <View style={styles.container}>
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
        margin: 10,
      },
})