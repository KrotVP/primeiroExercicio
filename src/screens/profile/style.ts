import React from "react";
import { StyleSheet, TextInput } from "react-native";

export const style=StyleSheet.create({
    textoFooter:{
        color:"white"
    },
    header:{
        backgroundColor:"#303136",
        paddingTop:40,
        paddingBottom:10,
        paddingHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    textoHeader:{
        color:'white',
        fontWeight:"bold",
        fontSize:22,
        paddingRight:100
    },
    viewUnder:{
        backgroundColor:'#adb196',
        width:"100%",
        height:100

    },
    viewImage:{
        backgroundColor:"#303136",
        width:"100%",
        height:124,
        paddingBottom:0
    },
    image:{
        borderRadius:50,
        borderWidth:5,
        borderColor:"#303136",
        width:90,
        height:90,
        position:"absolute",
        bottom:80,
        left:15
    },
    textImage:{
        color:"white",
        marginBottom:18,
        marginTop:50,
        marginLeft:20,
        fontSize:25,
        fontWeight:"bold",
    },
    textSubImage:{
        color:'#b3b4b9',
    },
    textStatus:{
        marginLeft:20,
        color:'#b3b4b9',
        fontWeight:"bold",
        fontSize:12
    },
    viewAllIcons:{
        backgroundColor:"#363940"
    },
    viewOneIcon:{
        flexDirection:"row",
        paddingRight:50,
        paddingLeft:20,
        alignItems:"center",
        paddingTop:12,
        paddingBottom:12
    },
    icon:{
        paddingRight:27,
    },
    textIcon:{
        color:"#a4a8a9",
        fontWeight:"bold"

    },
    textContainer:{
        color:"#abaeb5",
        paddingTop:15,
        paddingBottom:20,
        paddingLeft:20,
        fontWeight:"bold",
        fontSize:14
    },
    footer: {
        backgroundColor: '#18191d',
       justifyContent: 'space-between',
        flexDirection: 'row',
        alignContent: 'center',
        paddingHorizontal: 20,
        paddingTop:13,
        alignItems:"center",
        paddingBottom:10
    },
    footerContainer: {
        justifyContent: 'flex-end',
    },
    footerButton: {
        padding: 10,

    },
    iconQuadrado:{
        paddingRight:27,
        width:25,
        height:25,
        marginRight:35,
        backgroundColor:"#b6b7bb"
    },
    iconNitro:{
        paddingRight:27,
        width:15,
        height:20,
        marginRight:35,
    },
    textoNitro:{
        color:"#9195e0",
        fontWeight:"bold"
    },
    iconNitro2:{
        paddingRight:27,
        width:30,
        height:30,
        marginRight:35,
        tintColor:"#b6b7bb"
    },
    imageFooter:{
        width:30,
        height:30,
        borderRadius:90
    },
    imageFooterPNG:{
        width:30,
        height:30,
        borderRadius:90,
       
    }
    


})

