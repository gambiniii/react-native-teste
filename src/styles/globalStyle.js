import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    background: {
        backgroundColor: "#1D242B",
        padding: 20,
        flex: 1,
        width: "100%"
    },

    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },

    lightText: {
        color: "#FFF",
    },

    largeTxt: {
        fontSize: 30,
    },

    carousel: {
        width: "100%",
        marginTop: 20,
    },


    container: {
        paddingTop: 50,
    },

    tinyLogo: {
        width: 75,
        height: 75,
        margin: 5,
        borderRadius: 40,
        borderWidth: 1
    },

    largeImage: {
        width: 200,
        height: 200,
        margin: 5,
        borderRadius: 40,
        borderWidth: 1
    },

})