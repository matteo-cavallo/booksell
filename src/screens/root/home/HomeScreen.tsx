import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { TextProps } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import { ScrollView } from 'react-native-gesture-handler';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import { ButtonComponent } from '../../../shared/button.component';
import { TextComponent } from '../../../shared/text.component';
import { TextFieldComponent } from '../../../shared/textField.component';
import { FontStyle } from '../../../styles/theme';

export const HomeScreen = () => {

    const navigation = useNavigation()
    

    const styles = StyleSheet.create({
        container: {
            flex: 1, 
            justifyContent: "center",
            alignItems: "center",
            padding: 16
        },
        text: {
            fontSize: 34,
        }
    })
  
    return (
            <ScrollView>
                    <View style={styles.container}>     
                    <TextComponent type="Primary" style={FontStyle.caption}>Primary</TextComponent>
                    <TextComponent type="Primary" style={FontStyle.footnote}>Primary</TextComponent>
                    <TextComponent type="Primary" style={FontStyle.footnoteBold}>Primary</TextComponent>
                    <TextComponent type="Primary" style={FontStyle.body}>Primary</TextComponent>
                    <TextComponent type="Primary" style={FontStyle.headline}>Primary</TextComponent>
                    <TextComponent type="Primary" style={FontStyle.title1}>Primary</TextComponent>
                    <TextComponent type="Primary" style={FontStyle.largeTitle}>Primary</TextComponent>

                    <TextComponent type="Secondary" style={FontStyle.caption}>Secondary</TextComponent>
                    <TextComponent type="Secondary" style={FontStyle.footnote}>Secondary</TextComponent>
                    <TextComponent type="Secondary" style={FontStyle.footnoteBold}>Secondary</TextComponent>
                    <TextComponent type="Secondary" style={FontStyle.headline}>Secondary</TextComponent>
                    <TextComponent type="Secondary" style={FontStyle.title1}>Secondary</TextComponent>
                    <TextComponent type="Secondary" style={FontStyle.largeTitle}>Secondary</TextComponent>

                <ButtonComponent title="Ciao" onPress={() => alert("Ciao")}/>
                <ButtonComponent title="Ciao" onPress={() => alert("Ciao")} disabled style={{marginTop: 8}}/>
                <TextFieldComponent placeholder="Ciao" style={{marginTop: 8}}/>
                <TextFieldComponent placeholder="Ciao" value="Ciao inserito" style={{marginTop: 8}}/>
                    </View>
            </ScrollView>
    )
}
