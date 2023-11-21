import React, { useState } from 'react'
import { SafeAreaView, Text, TextInput, Image, ScrollView, StyleSheet } from 'react-native'
import globalStyle from '../../styles/globalStyle'

import feed from './feed'
import locais from '../Home/locais/locais'

export default function Search({ navigation }) {
    const [texto, setTexto] = useState("")

    function buscar() {
        navigation.navigate('Establishment', { establishment: locais[0] })
    }

    return (
        <SafeAreaView>
            <SafeAreaView style={[globalStyle.background, { padding: 35 }]}>
                <TextInput
                    style={styles.input}
                    value={texto}
                    onChangeText={newText => setTexto(newText)}
                    onEndEditing={buscar}
                    placeholder='Buscar rolês...'
                />
            </SafeAreaView>

            <ScrollView contentContainerStyle={styles.container}>
                {
                    feed.map(post => {
                        return (
                            <Image
                                style={styles.cell}
                                keyExtractor={item => item.id}
                                source={post.photo}
                            />
                        )
                    })
                }
            </ScrollView>



        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: "100%"
    },
    cell: {
        width: 130.9,
        height: 130.9,
        backgroundColor: 'red'
    },
    input: {
        backgroundColor: "#ccc",
        height: 10,
        color: "#000"
    }
});
