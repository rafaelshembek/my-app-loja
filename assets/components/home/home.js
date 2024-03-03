import React from "react";
import { Text, View, StyleSheet, FlatList, TouchableHighlight } from "react-native";

export default Home = () => {

    const links = [
        { title: 'Pix', cor: '#fff' },
        { title: 'QRCod', cor: '#fff' },
        { title: 'Pagamento', cor: '#fff' },
        { title: 'Transfereça', cor: '#fff' },
        { title: 'Cartão Virtual', cor: '#fff' }
    ]

    return (
        <>
            <View style={[styles.item]}>
                <FlatList
                    data={links}
                    // pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    renderItem={({ item }) => {
                        return (
                            <TouchableHighlight style={[styles.card, { backgroundColor: item.cor }]} onPress={() => {
                                alert(item.title)
                            }}>
                                <Text style={[styles.title]}>{item.title}</Text>
                            </TouchableHighlight>
                        )
                    }}
                />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3
    },
    card: {
        height: 50,
        margin: 8,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        shadowColor: '#333',
        shadowOffset: { width: 0, height: 1 },
        elevation: 2
    },
    title: {
        fontSize: 12,
        color: '#bbb'
    }
})