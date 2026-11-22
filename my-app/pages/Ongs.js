import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Appbar, IconButton } from 'react-native-paper';
import CardComponent from './../components/Card'
import SearchbarComponent from './../components/Searchbar'
import ButtonComponent from './../components/Button'

export default function Ongs() {

    return (

        <View style={styles.container}>
            <View style={styles.fundoEscuro}>
                <Appbar.Header style={styles.appbar}>
                    {/* <Appbar.BackAction onPress={() => { }} /> */}
                    <Image
                        source={require('./../assets/logo.png')}
                        resizeMode="contain"
                        style={styles.logo}
                    />
                    <Appbar.Content title="ONGS" color='#fff26a' />
                    <Appbar.Content logo="" />
                    <Appbar.Action icon="magnify" color='#fefce9' onPress={() => { }} />
                </Appbar.Header>
                <ImageBackground
                    source={require('./../assets/ONGSFundo.png')}
                    resizeMode="cover"
                    imageStyle={styles.image}
                    style={styles.imagemFundo}
                >
            
                <CardComponent/>
                </ImageBackground>

                <View style={styles.secaoPesquisa}>
                    <Text style={styles.titleParceiros}>Conheça alguns dos nossos parceiros!!!</Text>

                    <View style={styles.pesquisa}>
                        <SearchbarComponent />
                        
                        <IconButton
                            icon="magnify"
                            mode="contained"
                            iconColor='#256100'
                            style={{backgroundColor:"#e6ff02"}}
                            size={24}
                            onPress={() =>{}}
                        />
                    </View>

                    <ButtonComponent text="Cadastre sua instituição aqui" largura="100" icon="arrow-right"/>
                </View> 
            </View> 

            <View style={styles.secaoOngs}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{

        flex:1
    },
    fundoEscuro:{

        flex:1,
        
    },
    appbar:{

        padding:0,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor: '#3f3f3f',
        
    },
    logo:{

        padding:0,
        margin:0,
        width:100,
        height:150,

    },
    imagemFundo:{

        flex:1,
        width: '100%',
        alignItems:'center',
        alignContent:'center',
        margin: 0,
        paddingTop:25,
        backgroundColor: '#3f3f3f',
    },
    image:{

        width:'100%',
        height:'100%'

    },
    secaoPesquisa:{

        flex:1,
        alignContent:"center",
        alignItems:"center",
        backgroundColor: '#3f3f3f',
        padding:20
    },
    titleParceiros:{

        color:"#ff7700",
        fontWeight:"bold",
        fontSize:18,
        paddingBottom:15
    },
    pesquisa:{
        flexDirection:"row",
        justifyContent:"space-around",
       
    },
    secaoOngs:{
        flex:1
    }
})