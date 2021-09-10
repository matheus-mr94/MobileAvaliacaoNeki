import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from "../Telas/Home";
import { Login } from "../Telas/Login";
import { Cadastro } from "../Telas/Cadastro";




const { Navigator, Screen } = createStackNavigator();




export function AuthRoutes() {
    return (
        <Navigator
        // headerMode= "none"
        screenOptions={{
            cardStyle:{
                backgroundColor: 'transparent'
            }
        }}
        
        >
            
            <Screen
                name="Login"
                component={Login}
            />

            <Screen
                name="Cadastro"
                component={Cadastro}
            />

            <Screen
                name="Home"
                component={Home}
            />
        </Navigator>
    )
}