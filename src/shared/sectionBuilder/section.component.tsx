import React from 'react'
import {
	View,
	Text,
	StyleSheet,
	ViewStyle,
	TextStyle, ImageStyle
} from 'react-native'
import {useCustomTheme} from '../../styles/themeHook';
import {FontStyle} from '../../styles/theme';

export interface SectionComponentProps {
	title: string,
	style?: ViewStyle | TextStyle | ImageStyle
	headerStyle?: ViewStyle | TextStyle | ImageStyle,
	mergeItem?:boolean
}

export const SectionComponent:React.FC<SectionComponentProps> = (props) => {
	const {theme,colorScheme} = useCustomTheme()
	const {mergeItem = false} = props



	const customStyle = StyleSheet.create({
		view:{
			marginVertical:10,
			marginHorizontal:10,
			...props.style
		},
		header:{
			fontSize: FontStyle.footnote.fontSize,
			color: theme.colors.secondary,
			...props.headerStyle
		},
		//This style is always passed to the child SectionItem and is the default styling
		//By doing this way you can override the styling for an entire section items list instead of doing one by one
		sectionItem:{
			marginHorizontal:5,
			marginVertical:5,
			paddingVertical:10,
			paddingHorizontal:15,
			backgroundColor:theme.colors.fillPrimary,
			borderRadius:theme.shapes.borderRadius,
		}
	})




	//MergeItem variables needed
	let childNumber = 0;
	const childrenLength = React.Children.toArray(props.children).filter(c => c).length;
	// add the props to the props.children
	const childrenWithExtraProp = React.Children.map(props.children, child => {
		childNumber++
		return React.cloneElement(child as React.ReactElement, {
			style: customStyle.sectionItem,
			mergeItem: mergeItem,
			isFirst: childNumber == 1 ,
			isLast: childNumber == childrenLength
		})
	});

	return (
		<View style={customStyle.view}>
			<Text style={customStyle.header}>{props.title}</Text>
			{childrenWithExtraProp}

		</View>
	)
}

