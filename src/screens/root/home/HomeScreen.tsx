import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { CenterComponent } from '../../../shared/center.component';
import { SectionComponent } from '../../../shared/sectionBuilder/section.component';
import {SectionBuilder} from '../../../shared/sectionBuilder/sectionbuilder.component';
import { SectionItem } from '../../../shared/sectionBuilder/sectionItem.component';
import {Text} from 'react-native';

export const HomeScreen = () => {

    const navigation = useNavigation()
    //
    return (
            <SectionBuilder >
                <SectionComponent  style={{marginHorizontal:20}} title={"IDENTIFICATIVO"}>
                    <SectionItem>
                        <Text>Ciao 1</Text>
                    </SectionItem>
                    <SectionItem>
                        <Text>Ciao 2</Text>
                    </SectionItem>
                    <SectionItem>
                        <Text>Ciao 3</Text>
                    </SectionItem>
                </SectionComponent>
                <SectionComponent title={"IDENTIFICATIVO 2"}>
                    <SectionItem>
                        <Text>Ciao</Text>
                    </SectionItem>
                    <SectionItem>
                        <Text>Ciao2</Text>
                    </SectionItem>
                </SectionComponent>
            </SectionBuilder>
    )
}
