import CircularProgress,{ProgressRef} from 'react-native-circular-progress-indicator';
import { GlobalStyles } from '../Styles/LightMode';
import { StyleSheet, View } from 'react-native'
import { useRef } from 'react';

export default function Progress(){
    const progressRef = useRef<ProgressRef>(null);
    // progressRef.current.reAnimate()
    return(
        <View style={styles.container}>
        <CircularProgress
        // ref={progressRef}
  value={10}
  radius={40}
  maxValue={10}
  initialValue={0}
  inActiveStrokeColor={'black'}
  inActiveStrokeOpacity={0.15}
  activeStrokeColor={GlobalStyles.colors.p3}
  duration={1000}
/></View>
    )
}

const styles=StyleSheet.create({
    container:{
       marginHorizontal:20
    }
})