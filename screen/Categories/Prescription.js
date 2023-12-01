import { SafeAreaView, Text, View } from "react-native";
import CatHead from "../../component/CatHead";
import SearchTab from "../../component/SearchTab";
import HeadIcon from "../../component/HeadIcon";

export default function Prescription(){
    return(
        <SafeAreaView><HeadIcon/>
            <CatHead title={'Search Prescription'}/>
            <SearchTab place={'Search by Patient/Mobile NO.,Name'}/>
        </SafeAreaView>
    )
}