import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

export default Header = () => {

    return (
        <>
            <View style={styles.container}>
                <View style={styles.headerTotalAsset}>
                    <Text style={styles.titleTotalAsset}>Total Asset</Text>
                </View>
                <View style={styles.headerTitle}>
                    <Text style={styles.title}>R$1258.00</Text>
                </View>
                <View style={styles.headerbalance}>
                    <Text style={styles.titleBalance}>Balance R$250.00</Text>
                </View>
                <View style={styles.btns}>
                    <TouchableHighlight style={styles.btn} onPress={() => alert('Pressed!')} underlayColor={"white"}><Text style={styles.titleBtn}>Topup</Text></TouchableHighlight>
                    <TouchableHighlight style={styles.btn} onPress={() => alert('Pressed!')} underlayColor={"white"}><Text style={styles.titleBtn}>Transfer</Text></TouchableHighlight>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        marginBottom: 12,
    },
    title: {
        fontSize: 21,
        color: '#eee',
        fontWeight: 'bold',
        fontSize: 33
    },
    titleTotalAsset: {
        fontSize: 12,
        color: '#888',
    },
    titleBalance: {
        fontSize: 12,
        color: '#65E0BD',
        marginBottom: 21
    },
    btn: {
        backgroundColor: "#fff",
        padding: 12,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        margin: 4
    },
    btns: {
        marginBottom: -100,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    titleBtn: {
        color: '#888'
    }
})