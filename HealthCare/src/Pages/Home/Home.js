import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Modal, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../Context/UserContext';
import VoltarParaLogin from '../../Components/Buttons/VoltarParaLogin';
import Loading from '../../Components/Loading/Loading';

export default function Home() {

    const { user } = useUser();

    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();

    const handleVoltar = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            navigation.navigate('Login')
        }, 500)
    }

    return (
        <>
            <Loading visible={visible} />
            <View style={styles.container1}>
                <Text style={styles.txt}>HOMEPAGE</Text>
                <VoltarParaLogin onpress={handleVoltar} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    header: {
        marginTop: 35,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

    container1: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#F6F8FA',
        alignItems: 'center',
        //justifyContent: 'center',
    },

    txt: {
        fontSize: 32,
        color: 'black',
        marginTop: 220,
        alignItems: 'center',
        padding: 10,
        marginLeft: -25,
        height: 70,
        fontWeight: 'bold',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 7,
        textShadowColor: '#B3B6B7',
    },

    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

});