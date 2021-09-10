import React from "react";
import { View, Image, TouchableWithoutFeedback, Text} from "react-native";
import { style } from "./styles";
import logo from "../../../assets/neki.png"
import { Button } from "../../Componentes/Button";
import { InputsText } from "../../Componentes/InputText";


export function Login() {

    return (
        <View style={style.container}>
            <View>
                <View style={style.header}>
                    <Image source={logo} style={style.logo} />
                </View>
                <View style={style.body}>
                    <View style={style.input1}>
                    <InputsText placeholder={"Usuário"} />
                    </View>
                    <View>
                    <InputsText placeholder={"Senha"} />
                    </View>
                    <View style={style.container2}>
                        <Button title={"Entrar"} />
                        <TouchableWithoutFeedback>
                            <Text style={style.text}>Voltar para o início</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        </View>
    )
}