import React, { FC } from "react"
import { Modal, Text, View } from "react-native"

export const ProfilePage = () => {

    return(
            <Modal visible={true} presentationStyle="pageSheet">
                <View>
                    <Text>Ciao</Text>
                </View>
            </Modal>
    )
}