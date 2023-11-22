import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../Pages/Login/Login.js';
import Cadastro from '../Pages/Cadastro/Cadastro.js';
import Home from '../Pages/Home/Home.js';
import Agenda from '../Pages/Agenda/Agenda.js';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{ headerShown: false }}
            /> */}
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Agenda"
                component={Agenda}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
};