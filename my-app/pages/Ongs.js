import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function Ongs() {

    return (

        <View style={styles.container}>
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
                <Text>wewe</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{

        flex:1

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
        justifyContent:'center',
        backgroundColor:"#fff26a",
        margin: 0,
        paddingBottom:20
    },

    image:{

        width:'100%',
        height:'40%'

    }
})