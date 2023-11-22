import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, Modal } from 'react-native'
import MenuButton from "../Menu/MenuButton";

const Header = () => {

    return (
        <>
            <View style={styles.container}>
                <MenuButton />
            </View>

            {/* <Modal
                visible={isModalVisible}
                onBackdropPress={toggleModal}
                onBackButtonPress={toggleModal}
                
            >               
                <View style={styles.modalContent}>

                    <Text>Opção 1</Text>
                    <Text>Opção 2</Text>
                    <MenuButton onpress={toggleModal}/>
                </View>
            </Modal> */}
        </>

    )
}

export default Header

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#5271FF',
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        opacity: 0.9
        //justifyContent: 'space-between'
    },

    modalContent: {
        flex: 1,
        height: 660,
        width: 280,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderWidth: 2,
        borderColor: '#5271FF',
        backgroundColor: '#5271FF',
    },

})