import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Dimensions, Image, TextInput, TouchableHighlight } from "react-native";
// import axios from "axios";

export default Contato = () => {

    const [myDados, setMyDados] = useState([])
    const [inputValue, setInputValue] = useState()

    const data = [
        { cor: '#65E0BD' },
        { cor: '#65B3E0' },
        { cor: '#65DAE0' },
        { cor: '#65E093' },
        { cor: '#658CE0' }
    ]

    const api = 'https://pixabay.com/api/'
    const apiKey = '5987612-4c0d31abc18ff4b9ab975d47c'
    const total_result = 5
    const url = `${api}?key=${apiKey}&per_page=${total_result}&q=${inputValue}&image_type=illustration`
    const fetchImage = async () => {
        try {
            const dados = await fetch(url)
            const result = await dados.json()
            setMyDados(result.hits)
            console.log('=================================')
            console.table(`DADOS DA API = ${myDados.pageURL}`)
            console.log('=================================')
        } catch (error) {

        }
    }

    const handleInputChange = (text) => {
        setInputValue(text)
    }

    const handleSubmit = () => {
        console.log(inputValue)
        fetchImage()
    }

    return (
        <>
            <View style={styles.cardInput}>
                <TextInput style={styles.inputSearch} placeholder="Pesquisar" onChangeText={handleInputChange} />
                <TouchableHighlight style={styles.btnSearch} onPress={handleSubmit}><Text style={styles.btnTitle}>Buscar</Text></TouchableHighlight>
            </View>
            <View style={[styles.item]}>
                <FlatList
                    data={myDados}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    renderItem={({ item }) => {
                        return (
                            <View style={[styles.card, { backgroundColor: item.cor }]}>
                                <Image style={styles.image} source={{ uri: item.webformatURL }} />
                                <View style={styles.likes}>
                                    <Text style={styles.number_like}>Likes: {item.likes}</Text>
                                    {/* <Text style={styles.tags}>{item.}</Text> */}
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    item: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        width: 200,
        margin: 9,
        // padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7
    },
    likes: {
        position: 'absolute',
        backgroundColor: '#fff',
        // borderRadius: 100,
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 24,
        bottom: -10,
    },
    number_like: {
        color: '#333',
        paddingLeft: 10
    },
    image: {
        height: 400,
        width: 200,
        margin: 5
    },
    cardInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        padding: 12
    },
    inputSearch: {
        width: '80%',
        fontSize: 21,
        paddingLeft: 21,
        backgroundColor: "#F2F2F2",
        height: 50,
        left: -2,
        borderRadius: 10,
    },
    btnSearch: {
        width: '21%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
        borderRadius: 10,
        backgroundColor: "#0D0D0D"
    },
    btnTitle: {
        color: '#fff'
    }
})