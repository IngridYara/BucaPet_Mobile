import { StyleSheet, Text, View, Image } from 'react-native';
import { Appbar } from 'react-native-paper';
import { ImageBackground } from 'react-native-web';

export default function Ongs() {

    return (

        <View>
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
                resizeMode="strech"
                
                style={styles.imagemFundo}
            >
                <Text>wewe</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({

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
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        backgroundColor:"#fff26a"
    }
})