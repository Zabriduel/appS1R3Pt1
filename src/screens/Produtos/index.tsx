import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, FlatList, Image, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { useState } from "react";

type Produto = {
    id: number,
    nomeProduto: string,
    valorPar: number,
    valorAVista: number,
    imagem: string
}

type Quantidades = {
    [key: string]: number
}
type Valores = {
    [key: number]: number
}

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;


export default function Produtos() {
    const navigation = useNavigation<NavigationProps>();

    const produtos: Produto[] = [
        { id: 1, nomeProduto: 'Livro', valorPar: 120, valorAVista: 105.9, imagem: '../../../assets/livro.jpg' },
        { id: 2, nomeProduto: 'Caneta', valorPar: 5, valorAVista: 3.5, imagem: '../../../assets/livro.jpg' },
        { id: 3, nomeProduto: 'Caderno inteligente', valorPar: 150, valorAVista: 120.9, imagem: '../../../assets/livro.jpg' },
        { id: 4, nomeProduto: 'Caderno studies', valorPar: 213.98, valorAVista: 180, imagem: '../../../assets/livro.jpg' },
        { id: 5, nomeProduto: 'Post-it', valorPar: 15, valorAVista: 9.99, imagem: '../../../assets/livro.jpg' }
    ]

    const [quantidades, setQuantidades] = useState<Quantidades>({});
    const [busca, setBusca] = useState('')

    const produtosFiltrados = produtos.filter(produto =>
        produto.nomeProduto.toLocaleLowerCase().startsWith(busca.toLocaleLowerCase())
    );

    const aumentar = (id: number) => {
        setQuantidades(valor => ({
            ...valor,
            [id]: (valor[id] || 1) + 1
        }))
    }
    const diminuir = (id: number) => {
        setQuantidades(valor => ({
            ...valor,
            [id]: valor[id] > 1 ? valor[id] - 1 : 1
        }))
    }
    return (
        <View style={styles.container} >
            {/* <Text>Página Produtos</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Produtos')} style={styles.button} >
                <Text style={{ fontSize: 18, }}>Produtos</Text>
            </TouchableOpacity> */}

            <View>
                <TextInput placeholder="Digite para pesquisar"
                    style={styles.textBusca}
                    value={busca}
                    onChangeText={setBusca} />
            </View>
            <FlatList
                data={produtosFiltrados}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image
                            source={require('../../../assets/livro.jpg')} style={styles.imagem}
                        />
                        <Text style={styles.nomeProduto}>{item.nomeProduto}</Text>
                        <View style={styles.precosContainer}>
                            <Text>Valor parcelado: </Text>
                            <Text style={styles.precoParcelado}>
                                R$ {(item.valorAVista * quantidades[item.id] || item.valorPar).toFixed(2).replace('.', ',')}</Text>

                        </View>
                        <View style={styles.precosContainer}>
                            <Text>Valor à vist: </Text>
                            <Text style={styles.precoAVista}>
                                R$ {(item.valorAVista * quantidades[item.id] || item.valorAVista).toFixed(2).replace('.', ',')}</Text>
                        </View>
                        <View style={styles.acoesContainer}>
                            <View style={styles.qtdContainer}>
                                <TouchableOpacity onPress={() => diminuir(item.id)} style={styles.buttonQtd}>
                                    <Text>-</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.quantidade}>
                                {quantidades[item.id] || 1}
                            </Text>
                            <View style={styles.qtdContainer}>
                                <TouchableOpacity onPress={() => { aumentar(item.id) }} style={styles.buttonQtd}>
                                    <Text>+</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.buttonAddCarrinho} >
                                <Text style={styles.textAddCarrinho}> Adicionar </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}

            />
        </ View >
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9f9f9f',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    textBusca: {
        borderRadius: 25,
        backgroundColor: '#ffffff',
        padding: 15,
        alignItems: 'center',
        elevation: 2
    },
    imagem: {
        width: 100,
        height: 100,
        marginBottom: 10,
        resizeMode: 'contain'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',

        elevation: 1,


        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 }
    },
    nomeProduto: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    },
    precosContainer: {
        flexDirection: 'row',
        margin: 15
    },
    precoParcelado: {
        color: '#777',
        fontSize: 14
    },
    precoAVista: {
        color: '#2E7D32',
        fontSize: 16,
        fontWeight: 'bold'
    },
    acoesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        justifyContent: 'space-between',
        width: '100%'
    },
    qtdContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonQtd: {
        backgroundColor: '#EEE',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5
    },
    quantidade: {
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttonAddCarrinho: {
        backgroundColor: '#6200EE',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 8,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textAddCarrinho: {
        color: '#FFF',
        fontWeight: 'bold'
    },

});

