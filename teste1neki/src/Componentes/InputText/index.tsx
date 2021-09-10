import React from "react";
import { TextInput,SafeAreaView } from "react-native";
import { style } from "./styles";


type Props={
    placeholder:string;

   
    
}

export function InputsText({placeholder}:Props){
    const[text,onChangeText] = React.useState('');


    return(
        <SafeAreaView>
        <TextInput 
        style={style.input}
        onChangeText={onChangeText}
        value={text}               
        placeholder={placeholder}
        />
        </SafeAreaView>
    )}