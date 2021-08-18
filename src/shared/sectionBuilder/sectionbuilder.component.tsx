import React from 'react'
import {StyleSheet, ScrollView, ViewStyle, TextStyle, ImageStyle} from 'react-native'
import {SectionComponentProps} from './section.component';

interface SectionBuilderProps {
    style?: ViewStyle | TextStyle | ImageStyle,
    children: React.PropsWithChildren<any>

}

export const SectionBuilder: React.FC<SectionBuilderProps> = (props) => {

    const customStyle = StyleSheet.create({
        view: {
            flex: 1,
            alignSelf: "stretch",
            ...props.style
        }
    })

    return (
        <ScrollView style={customStyle.view}>
            {props.children}
        </ScrollView>
    )
}

