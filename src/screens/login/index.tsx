import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, ImageBackground } from "react-native";
import { style } from "./styles";
import fundo from "../../assets/images/fundo.jpeg"
import essa from "../../assets/icons/essamesmo.png"

export const Login = ({navigation}) => {
    const [email, setEmail] = useState<string>("")

    const [password, setPassword] = useState<string>("")

    return (
        
            <View style={style.container}>
                <ImageBackground source={fundo} style={style.imagem}>
                <TouchableOpacity>
                    <Image source={essa} style={style.seta} />
                </TouchableOpacity>
                <View style={style.textos}>
                    <Text style={style.texto1}>Boas-vindas de volta! </Text>
                    <Text style={style.texto2}>Estamos muito animados em te ver novamente!</Text>
                </View>

                <TextInput 
                style={style.input}
                placeholder="E-mail ou número de telefone"
                placeholderTextColor="#707175"
                ></TextInput>
                <TextInput
                style={style.input}
                placeholder="senha"
                placeholderTextColor="#707175"
                
                ></TextInput>
                <Text style={style.textoSecundario}>Esqueceu sua senha?</Text>
                <Text style={style.textoSecundario}>Utilizar um gerenciador de senhas?</Text>
                <TouchableOpacity style={style.botao} onPress={()=> navigation.navigate('Profile') }>
                        <Text style={style.textoBotao}>Entrar</Text>
                </TouchableOpacity>
                </ImageBackground>
                
            </View>
        

    )
}