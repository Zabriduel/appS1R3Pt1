import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { RouteProp, useRoute } from "@react-navigation/native";

type DetalhesRouteProp = RouteProp<RootStackParamList, 'Detalhes'>;


export default function DetalhesProduto() {
    const route = useRoute<DetalhesRouteProp>();
    const { produto } = route.params
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/livro.jpg')}
                style={{ width: 50, height: 150 }}
            />
            <Text>{produto.nomeProduto}</Text>
            <Text>Parcelado: R$ {produto.valorPar.toFixed(2)}</Text>
            <Text>À vista: R$ {produto.valorAVista.toFixed(2)}</Text>
        </View >
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