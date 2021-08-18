import { useNavigation } from "@react-navigation/native";
import React ,{ FC, PropsWithChildren, useState } from "react";
import { Modal, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Text, TextProps } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { FontStyle } from "../styles/theme";
import { useCustomTheme } from "../styles/themeHook";
import { ButtonComponent } from "./button.component";

export interface PickerItem {
    key: string;
    label: string
}

interface CustomPickerProps extends TextProps {
    label: string;
    values: PickerItem[];
    onChangeSelected: (key: PickerItem) => void
}

export const PickerComponent: FC<CustomPickerProps> = (props) => {

    const {theme} = useCustomTheme()
    const navigation = useNavigation()

    const customStyle = StyleSheet.create({
        container: {
            width: '100%',
            height: 50, 
            backgroundColor: theme.colors.fillTertiary,
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingHorizontal: 16,
        },
        rightView: {
            flexDirection: "row",
            alignItems: "center"
        },
        textPicker: {
            color: theme.colors.primary,
            fontSize: 17,
            flex: 1,
        },
        textValue: {
            color: theme.colors.secondary,
            fontSize: 17,
            marginEnd: 4
        },
        icon: {
            padding: 8,
        },
        footer: {
            color: theme.colors.secondary,
            marginTop: 8,
            marginHorizontal: 16
        },
        titleContainer:{
            justifyContent: "center",
            alignItems: "center",
            height: 50
        },
        modal:{
            backgroundColor: theme.colors.background
        }
    })    

    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState(props.values[0])

    const handleSelect = (item: PickerItem) => {

        setSelected(item)
        setShow(!show)
    }



    return (
        <TouchableOpacity onPress={() => setShow(!show)}>
            <View style={customStyle.container} >
                <Text style={customStyle.textPicker}>{props.label}</Text>
                <View style={customStyle.rightView}>
                    <Text style={customStyle.textValue}>{selected.label}</Text>
                    <Icon name="chevron-right" type="evilicons" color={theme.colors.secondary}  />
                </View>
            </View>
            <Modal visible={show} animationType="slide" presentationStyle="pageSheet">
                <View style={{backgroundColor: theme.colors.background, flex: 1}}>
                <View style={customStyle.titleContainer}>
                    <Text style={[FontStyle.headline, {color: theme.colors.primary}]}>{props.label}</Text>
                </View>
                    <View style={{ flex: 1, padding: 16}}>
                        {
                            props.values.map( item => <ItemButton value={item} onSelected={item => handleSelect(item)}/>)
                        }
                    </View>
                </View>
                </Modal>
        </TouchableOpacity>
    )
}

interface ItemButtonProps {
    value: PickerItem;
    onSelected: (item: PickerItem) => void
}

const ItemButton: FC<ItemButtonProps> = ({value, onSelected}) => {

    const {theme} = useCustomTheme()

    const style = StyleSheet.create({
        container: {
            height: 50,
            borderBottomColor: theme.colors.tertiary,
            borderBottomWidth: 1,
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 8,
            flexDirection: "row",
            
        },
        text: {
            color: theme.colors.primary,
            fontSize: 17
        }
    })
    return (
        <TouchableOpacity onPress={() => onSelected(value) }>
            <View style={style.container}>
                <Text style={style.text}>{value.label}</Text>
                <Icon name="chevron-right" type="evilicons" color={theme.colors.secondary}  />
            </View>
        </TouchableOpacity>
    )
}