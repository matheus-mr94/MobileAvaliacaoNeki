import React from "react";
import { View, Image, Text } from "react-native";
import { style } from "./styles";
import logo from "../../../assets/neki.png"
import { Button } from "../../Componentes/Button";
// import { useNavigation } from "@react-navigation/core";

export function Home() {

    // const navigation= useNavigation();

    // function handleLogin() {
    //     navigation.navigate('Login');
    // }
    // function handleCadastrar() {
    //     navigation.navigate('Cadastro');
    // }

    return (
        <View style={style.container}>
            <View>
                <View style={style.header}>
                    <Image source={logo} style={style.logo} />
                    <View style={style.body}>
                        <Text style={style.text1}>
                            Sua parceira para a
                        </Text>
                        <Text style={style.text2} >
                            TRANSFORMAÇÃO DIGITAL
                        </Text>
                    </View>
                    <View style={style.container2}>
                        <Button  title={"Entrar"} />
                        <Button  title={"Cadastrar"} />
                    </View>

                </View>
            </View>
        </View>
    )

}