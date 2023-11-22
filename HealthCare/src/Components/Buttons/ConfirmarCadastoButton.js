import React from "react";
import { StyleSheet, Text, TouchableOpacity} from 'react-native'



const ConfirmarCadastroButton = ({ onpress }) => {
    return (
        <TouchableOpacity style={styles.button}
           onPress={onpress} >
            <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

    )
}

export default ConfirmarCadastroButton

const styles = StyleSheet.create({

    button: {
        //marginTop: -25,
        backgroundColor: '#11A99A',
        borderRadius: 5,
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.8
    },

    buttonText: {
        fontSize: 17
    }
})