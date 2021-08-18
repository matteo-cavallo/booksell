import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button';
import { ScrollView } from 'react-native-gesture-handler';
import { ButtonComponent } from '../../../shared/button.component';
import { CenterComponent } from '../../../shared/center.component';
import { TextComponent } from '../../../shared/text.component';
import { TextFieldComponent } from '../../../shared/textField.component';
import { FontStyle } from '../../../styles/theme';

export const HomeScreen = () => {

    const navigation = useNavigation()

    return (
        <CenterComponent>
            <Button title="Go to profile" onPress={() => navigation.navigate("Profile")}/>
        </CenterComponent>
    )
}
