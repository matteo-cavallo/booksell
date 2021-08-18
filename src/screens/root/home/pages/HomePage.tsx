import React, { useState } from "react"
import { Modal, ScrollView, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { PickerComponent, PickerItem } from "../../../../shared/picker.component"
import { TextFieldComponent } from "../../../../shared/textField.component"
import { useCustomTheme } from "../../../../styles/themeHook"

export const HomeScreen = () => {

    const {theme} = useCustomTheme()

    const [text, setText] = useState("")
    const [text1, setText1] = useState("")
    const [text2, setText2] = useState("")

    const styles = StyleSheet.create({
        container: {
            flex: 1, 
            justifyContent: "center",
            alignItems: "center",
            padding: 16
        },
        text: {
            fontSize: 34,
            color: theme.colors.primary
        }
    })


    const [prezzo, setPrezzo] = useState<PickerItem>({key: "1", label: "Nuovo"})

    return (
        <ScrollView>
            <View style={styles.container}>     
                <Text style={styles.text}>Ciao</Text> 
                <TextFieldComponent value={text} onChangeText={setText} placeholder="Cerca..." deleteButtonEnabled />
                <TextFieldComponent value={text1} onChangeText={setText1} placeholder="Cerca..."/>
                <TextFieldComponent value={text2} onChangeText={setText2} placeholder="Cerca..." footer="Questa è la descrizione dell'input field."/>

                <PickerComponent label="Prezzo" values={[{key: "1", label: "Nuovo"}, {key: "2", label: "Usato"}]} onChangeSelected={setPrezzo}/>

            </View>
        </ScrollView>
    )
}