import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;


export default function Home() {
    const navigation = useNavigation<NavigationProps>();
    return (
        <SafeAreaView style={{ flex: 1 }} >
            <StatusBar style="auto" />
            <Text>Página Home</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Produtos')} style={styles.button}>
                <Text style={{fontSize:18,}}>Produtos</Text>
            </TouchableOpacity>
        </SafeAreaView >
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#35ff38',
        width: '95%',
        height: 48
    }
});