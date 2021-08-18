
import React from 'react'
import {ImageStyle, StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native'
import {useCustomTheme} from '../../styles/themeHook';

export interface SectionItemProps{
	style?: ViewStyle | TextStyle | ImageStyle,
	children: React.PropsWithChildren<any>
	//For MergeItem Feature
	mergeItem?: boolean,
	isFirst?:boolean,
	isLast?:boolean,
}

export const SectionItem:React.FC<SectionItemProps> = (props) => {

	const {theme,colorScheme} = useCustomTheme()

	const mergeItemStyle= ()=> {
		// add custom style only if mergeItem is enabled
		if(props.mergeItem){
			// base of the item position : First Middle Last, add the appropriate styling

			if(props.isFirst){
				return {
					marginTop: 5,
					marginBottom: 0,
					borderTopLeftRadius: theme.shapes.borderRadius,
					borderTopRightRadius: theme.shapes.borderRadius,
					borderBottomLeftRadius: 0,
					borderBottomRightRadius: 0,
				}
			}

			if(props.isLast){
				return {
					marginTop: 0,
					marginBottom: 5,
					borderTopLeftRadius: 0,
					borderTopRightRadius: 0,
					borderBottomLeftRadius: theme.shapes.borderRadius,
					borderBottomRightRadius: theme.shapes.borderRadius,
				}
			}

			return {
				borderRadius:0,
				marginVertical:0
			}
		}
	}

	const customStyles = StyleSheet.create({
		view:{
			justifyContent:"center",
			alignItems:"flex-start",
			alignSelf:"stretch",
			height:50,
			...props.style,
			//override the props.style values passed from the parent
			...mergeItemStyle()
		}
	})

	return (
		<View style={[customStyles.view]}>
			{props.children}
		</View>
	)
}
