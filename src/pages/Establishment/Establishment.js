import React from 'react'
import { SafeAreaView, Text, Image, ScrollView } from 'react-native'

import globalStyle from '../../styles/globalStyle'
import locais from '../Home/locais/locais'

export default function Establishment(props) {

    const { id, name } = props.route.params.establishment

    const local = locais.find(
        local => local.id === id
    )

    return (
        <SafeAreaView style={[globalStyle.background]}>
            <Text style={[globalStyle.lightText, globalStyle.largeTxt]} > {name}</Text>

            <SafeAreaView style={{ flexDirection: "row", marginTop: 50, padding: 5 }}>
                <Image
                    style={[globalStyle.largeImage]}
                    source={
                        local.picture
                    }
                />

            </SafeAreaView>

            <Text style={globalStyle.lightText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas sollicitudin vulputate. Nullam a nunc et eros laoreet ornare nec sed sapien. Fusce ut augue at libero ultrices vulputate.
            </Text>


            <Text style={[globalStyle.lightText, globalStyle.largeTxt, { marginTop: 20 }]}>Mais fotos</Text>

            <ScrollView horizontal>
                <SafeAreaView style={{ flexDirection: "row", padding: 5 }}>
                    {
                        local.fotos.map(foto => {
                            return (
                                <Image
                                    style={[globalStyle.largeImage]}
                                    source={foto}
                                />

                            )
                        })
                    }

                </SafeAreaView>
            </ScrollView>


        </SafeAreaView >
    )
}