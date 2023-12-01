import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { GlobalStyles } from "../Styles/LightMode";
import { useState } from "react";
import { SelectCountry } from "react-native-element-dropdown";
export default function DropdownInput({data,onChange,style}){
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };
    return(
        <Dropdown
          style={[styles.dropdown,style]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}/>
    )
        }  




const styles=StyleSheet.create({
    dropdown: {
        height: 50,
        width:responsiveHeight(27),
        borderColor: GlobalStyles.colors.p3,
        borderWidth: 3.5,
        borderRadius: 14,
        paddingHorizontal: 8,
        
      },placeholderStyle: {
        fontSize: 16,
        color:'grey'
      },
      selectedTextStyle: {
        fontSize: 16,
      },iconStyle: {
        width: 20,
        height: 20,
      }, label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },   
    })