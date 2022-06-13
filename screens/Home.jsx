import { View,Text,Button } from "react-native";
import { StyleSheet ,StatusBar} from "react-native-web";


export default function Home(){

    return(
        <View style={styles.marg}>
           <Text>Hey there</Text>
        
        <Button

title="Get started"
color="red"
/>
           <View>

           </View>
            
        </View>
    )

}

const styles=StyleSheet.create({
    marg:{
        marginTop:"40px"
    }

})
