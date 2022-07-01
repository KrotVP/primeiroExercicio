import React from "react"
import { View, Text, ScrollView,Image, TouchableOpacity } from "react-native"
import { style } from "./style"
import FontAwesome5 from "@expo/vector-icons/FontAwesome5"
import Ionicons from "@expo/vector-icons/Ionicons"
import Perfil from "../../assets/images/perfil.jpg"
import Quadrado from "../../assets/icons/quadrado.png"
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons"
import Foundation from "@expo/vector-icons/Foundation"
import Key from "../../assets/icons/key.png"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import Nitro1 from "../../assets/icons/nitro.png"
import Nitro2 from "../../assets/icons/nitro2.png"
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import  AntDesign  from '@expo/vector-icons/AntDesign';
import Feather from "@expo/vector-icons/Feather"


export const Profile = ({navigation}) => {
    return <View style={{ flex: 1 }}>
        <View style={style.header}>
            <Text style={style.textoHeader}>Configurações de Usuário</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login') }>
            <Ionicons name={"enter-outline"} size={36} color={"white"} />
            </TouchableOpacity>
            <Ionicons name={"ellipsis-vertical"} size={32} color={"white"} />
        </View>

        <ScrollView style={{ flex: 2 }}>
            <View style={style.viewUnder}></View>
            <View style={style.viewImage}>
                
                <Image
                    source={Perfil}
                    style={style.image}
                />
                <Text style={style.textImage}>KrotVP<Text style={style.textSubImage}>#1446</Text></Text>
                <Text style={style.textStatus}>強くなりなさい！</Text>
            </View>
            <View style={style.viewAllIcons}>
            <Text style={style.textContainer}>CONFIGURAÇÕES DE USUÁRIO</Text>
            <TouchableOpacity style={style.viewOneIcon}>
                <Ionicons name={"person-circle"} style={style.icon} size={32} color={"#b6b7bb"}/>
                <Text style={style.textIcon}> Definir Status</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.viewOneIcon}>
                <Image source={Quadrado} style={style.iconQuadrado}/>
                <Text style={style.textIcon}>Minha Conta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.viewOneIcon}>
                <SimpleLineIcons name={"pencil"} style={style.icon} size={26} color={"#b6b7bb"}/>
                <Text style={style.textIcon}> Perfil do usuário</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.viewOneIcon}>
                <Foundation name={"shield"} style={style.icon} size={36} color={"#b6b7bb"}/>
                <Text style={style.textIcon}>Privacidade e segurança</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.viewOneIcon}>
                <Image source={Key} style={style.iconQuadrado}/>
                <Text style={style.textIcon}>Aplicativos Autorizados</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.viewOneIcon}>
                <MaterialIcons name={"devices"} style={style.icon} size={32} color={"#b6b7bb"}/>
                <Text style={style.textIcon}>Conexões</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.viewOneIcon}>
                <MaterialIcons name={"qr-code-2"} style={style.icon} size={32} color={"#b6b7bb"}/>
                <Text style={style.textIcon}>Escanear o código QR</Text>
            </TouchableOpacity>
            <Text style={style.textContainer}>CONFIGURAÇÕES NITRO</Text>
            <TouchableOpacity style={style.viewOneIcon}>
                <Image source={Nitro1} style={style.iconNitro} />
                <Text style={style.textoNitro}> Inscreva-se hoje</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.viewOneIcon}>
                <Image source={Nitro2} style={style.iconNitro2} />
                <Text style={style.textIcon}> Impulsos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.viewOneIcon}>
                <Ionicons name={"gift"} style={style.icon} size={28} color={"#b6b7bb"}/>
                <Text style={style.textIcon}>Presentear Nitro</Text>
            </TouchableOpacity>
            <Text style={style.textContainer}>CONFIG. DO APLICATIVO</Text>
            <TouchableOpacity style={style.viewOneIcon}>
                <MaterialCommunityIcons name={"microphone-settings"} style={style.icon} size={28} color={"#b6b7bb"}/>
                <Text style={style.textIcon}> Voz e Vídeo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.viewOneIcon}>
                <MaterialIcons name={"notification-important"} style={style.icon} size={28} color={"#b6b7bb"}/>
                <Text style={style.textIcon}>Notificações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.viewOneIcon}>
                <MaterialCommunityIcons name={"message-image"} style={style.icon} size={28} color={"#b6b7bb"}/>
                <Text style={style.textIcon}>Texto e imagens</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.viewOneIcon}>
                <FontAwesome5 name={"palette"} style={style.icon} size={28} color={"#b6b7bb"}/>
                <Text style={style.textIcon}>Aparência</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.viewOneIcon}>
                <FontAwesome name={"universal-access"} style={style.icon} size={28} color={"#b6b7bb"}/>
                <Text style={style.textIcon}>Acessibilidade</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.viewOneIcon}>
                <MaterialIcons name={"settings-applications"} style={style.icon} size={28} color={"#b6b7bb"}/>
                <Text style={style.textIcon}>Comportamento</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.viewOneIcon}>
                <MaterialCommunityIcons name={"translate"} style={style.icon} size={28} color={"#b6b7bb"}/>
                <Text style={style.textIcon}>Idioma</Text>
            </TouchableOpacity>
            <Text style={style.textContainer}>INFORMAÇÕES DO APLICATIVO-126.17 STABLE(126017)</Text>
            <TouchableOpacity style={style.viewOneIcon}>
                <Ionicons name={"information-circle"} style={style.icon} size={32} color={"#b6b7bb"}/>
                <Text style={style.textIcon}> Registro de alterações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.viewOneIcon}>
                <AntDesign name={"questioncircle"} style={style.icon} size={28} color={"#b6b7bb"}/>
                <Text style={style.textIcon}> Suporte</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.viewOneIcon}>
                <Ionicons name={"information-circle"} style={style.icon} size={32} color={"#b6b7bb"}/>
                <Text style={style.textIcon}> Enviar registros de depuração para o Suporte Discord</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.viewOneIcon}>
                <Ionicons name={"information-circle"} style={style.icon} size={32} color={"#b6b7bb"}/>
                <Text style={style.textIcon}> Reconhecimentos</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
        <View style={style.footerContainer}>
            <View style={style.footer}>
                <TouchableOpacity style={style.footerButton}>
                    <FontAwesome5 name={'discord'} color={'#a4a8a9'} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={style.footerButton}>
                    <FontAwesome5 name={"user"} size={25} color={"#a4a8a9"}/>
                </TouchableOpacity>
                <TouchableOpacity style={style.footerButton}>
                    <Ionicons name={'search'} color={'#a4a8a9'} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={style.footerButton}>
                    <Feather name={'at-sign'} color={'#a4a8a9'} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={style.footerButton} onPress={()=> navigation.navigate('Login') }>
                <Image
                    source={Perfil}
                    style={style.imageFooter}
                />
                </TouchableOpacity>
            </View>
        </View>
    </View>
}