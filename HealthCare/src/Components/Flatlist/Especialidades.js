import React from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';

const EspecialidadesList = ({ data }) => {

    return (
        <>
            <Text style={styles.title}>Especialidades Disponíveis </Text>
            <View style={styles.container}>
                <FlatList
                    style={styles.flatList}
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <Image source={item.image} style={styles.image} />
                            <Text style={styles.imageName}>{item.name}</Text>
                        </View>
                    )}
                />
            </View>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.43,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        //backgroundColor: '#5271FF'
    },

    itemContainer: {
        alignItems: 'center',
        marginRight: 10,
    },

    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },

    imageName: {
        marginTop: 5,
        textAlign: 'center',
    },

    title: {
        fontSize: 20,
        marginTop: 40,
        marginBottom: -20,
        marginLeft: 10,
        color: '#5F6A6A',
        fontWeight: 'bold',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 7,
        textShadowColor: '#B3B6B7',
    },

    flatList: {
        width: '100%',
        height: 200,
    },
});

export default EspecialidadesList;