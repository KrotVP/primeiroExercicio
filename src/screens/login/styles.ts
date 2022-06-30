import {ImageBackgroundBase, Platform, StyleSheet} from "react-native"
export const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'black',
        paddingTop: 50,
        paddingHorizontal: 10,
    },
    seta:{
        tintColor:"white",
        paddingLeft: 30,
        paddingTop:30,
        width:10,
        height:10
    },
    texto1:{
        color:"white",
        fontWeight:"bold",
        paddingTop:20,
        fontSize:20
    },
    texto2:{
        color:"gray"
    },
    textos:{
        alignItems:"center"
    },
    input:{
        backgroundColor:'#212226',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7,
        marginLeft:15,
        marginRight:15
    },
    textoSecundario:{
        color:"#4d93ad",
        marginLeft:15,
        marginTop:10
    },
    botao:{
        backgroundColor:"#5865f2",
        marginTop:10,
        borderRadius:5,
        marginLeft:10,
        marginRight:10
    },
    textoBotao:{
        paddingTop:10,
        paddingBottom:10,
        textAlign:"center",
        color:"white",
        paddingVertical:10
    },
    imagem:{
        flex:1
    }

})