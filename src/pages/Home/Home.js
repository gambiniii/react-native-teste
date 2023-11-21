import React from 'react'
import { SafeAreaView, Text, Image, ScrollView, Pressable } from 'react-native'

import globalStyle from '../../styles/globalStyle'
import stories from './stories'
import locais from './locais/locais'

export default function Home({ navigation }) {


    function establishmentSelect(establishment) {
        navigation.navigate('Establishment', { establishment: establishment })
    }

    function eventSelect(event) {
        navigation.navigate('Establishment', { establishment: event })
    }

    return (
        <SafeAreaView style={[globalStyle.background]}>
            <Text style={[globalStyle.lightText, globalStyle.largeTxt]}>Feed</Text>

            <SafeAreaView style={[globalStyle.carousel]}>
                <ScrollView horizontal>
                    {
                        stories.map(story => {
                            return (
                                <Image
                                    style={[globalStyle.tinyLogo]}
                                    keyExtractor={item => item.id}
                                    source={{
                                        uri: story.profilePic,
                                    }}
                                />
                            )
                        })
                    }
                </ScrollView>
            </SafeAreaView>

            <SafeAreaView style={[globalStyle.carousel]}>
                <Text style={[globalStyle.lightText, globalStyle.largeTxt]}>Locais que são a sua cara</Text>

                <ScrollView horizontal>
                    {
                        locais.map(local => {
                            return (
                                <Pressable onPress={() => establishmentSelect(local)}>
                                    <Image
                                        style={[globalStyle.largeImage]}
                                        key={local.id}
                                        source={local.picture}
                                    />
                                </Pressable>
                            )
                        })
                    }
                </ScrollView>
            </SafeAreaView>

            <SafeAreaView style={[globalStyle.carousel]}>
                <Text style={[globalStyle.lightText, globalStyle.largeTxt]}>Eventos perto de você</Text>

                <ScrollView horizontal>
                    {
                        locais.map(local => {
                            return (
                                <Pressable onPress={() => eventSelect(local)}>
                                    <Image
                                        style={[globalStyle.largeImage]}
                                        key={local.id}
                                        source={local.picture}
                                    />
                                </Pressable>
                            )
                        })
                    }
                </ScrollView>
            </SafeAreaView>

        </SafeAreaView>
    )
}

