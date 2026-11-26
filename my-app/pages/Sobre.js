import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  ImageBackground,
  FlatList,
} from "react-native";
import { Appbar, Card, IconButton } from "react-native-paper";
import ParallaxComponent from "../components/Parralax";
import { useRef } from "react";
import FormComentarios from "../components/FormComentarios";
import TabsNavigation from "../components/TabsNavigation";

export default function Sobre() {

  const scrollY = useRef(new Animated.Value(0)).current;

  const dados = [
    {
      id: "1",
      nome: "Anielle Carla",
      uri: require("./../assets/img/Anielle.png"),
    },
    {
      id: "2",
      nome: "Breno Pinheiro",
      uri: require("./../assets/img/Breno.png"),
    },
    {
      id: "3",
      nome: "Deborah Fernandes",
      uri: require("./../assets/img/Deborah.png"),
    },
    {
      id: "4",
      nome: "Ingrid Yara",
      uri: require("./../assets/img/Ingrid.png"),
    },
    {
      id: "5",
      nome: "João Felipe",
      uri: require("./../assets/img/Joao.png"),
    },
    {
      id: "6",
      nome: "Rodrigo Oliveira",
      uri: require("./../assets/img/Rodrigo.png"),
    },
  ];

  const dados2 = [
    {
      id: "1",
      nome: "Elena",
      ocupacao: "Professora",
      comentario:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley.",
    },
    {
      id: "2",
      nome: "Verônica",
      ocupacao: "Médica",
      comentario:
        "The librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades.",
    },
    {
      id: "3",
      nome: "Edson",
      ocupacao: "Arquiteto",
      comentario:
        "But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.desenvolvedor}>
      <Image source={item.uri} resizeMode="cover" style={styles.foto} />
      <Text style={styles.nome}>{item.nome}</Text>
    </View>
  );

  const renderItem2 = ({ item }) => (

    <Card style={styles.CardComentarios}>
      <View style={styles.alinhamento}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.nomeTitulo}>
            {item.nome}
          </Text>
          <Text variant="bodyMedium" style={styles.profissaoTitulo}>
            {item.ocupacao}
          </Text>
        </Card.Content>

        <Card.Actions>
          <IconButton
            icon="pencil"
            iconColor="#2E7D32"
            size={20}
            onPress={() => console.log("Pressed")}
            mode="outline"
          />

          <IconButton
            icon="close"
            style={styles.iconClose}
            iconColor="#ff0000"
            containerColor="transparent"
            size={20}
            mode="outlined"
            onPress={() => console.log("Pressed")}
          />
        </Card.Actions>
      </View>

      <Card.Content>
        <Text style={styles.comentario}>{item.comentario}</Text>
      </Card.Content>
    </Card>
  );

  return (

    <Animated.ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
    >
      <View style={styles.fundoEscuro}>
        <Appbar.Header style={styles.appbar}>
          <Image
            source={require("./../assets/img/logo.png")}
            resizeMode="contain"
            style={styles.logo}
          />
          <Appbar.Content title="Sobre" color="#fff26a" />
          <Appbar.Action icon="magnify" color="#fefce9" onPress={() => {}} />
        </Appbar.Header>

        <ImageBackground
          source={{
            uri: "https://i.pinimg.com/736x/bf/f8/13/bff8138fd2183886b9f2f728f129f176.jpg",
          }}
          resizeMode="cover"
          style={styles.imagemFundo}
        >
          <Text style={styles.tituloCentral}>
            Conheça um pouco mais sobre nós
          </Text>
        </ImageBackground>
      </View>

      <View style={styles.secaoDesenvolvedores}>
        <Text style={styles.titleDesenvoldores}>Desenvolvedores</Text>

        <View style={styles.gradeDesenvoldores}>
          <FlatList
            renderItem={renderItem}
            data={dados}
            keyExtractor={(item) => item.id}
            numColumns={3}
            scrollEnabled={false}
            columnWrapperStyle={styles.linhasGrade}
          />
        </View>
      </View>

      <View style={styles.secaoObjetivo}>
        <Text style={styles.titleObjetivo}>Nosso Objetivo!!!</Text>

        <Text style={styles.conteudoObjetivo}></Text>
      </View>

      <ParallaxComponent
        texto="Adote um animalzinho e ganhe um amigo para a vida toda"
        uri="https://i.pinimg.com/736x/b2/89/c8/b289c8d35ff3540f9f0ab03881ffde64.jpg"
        scrollY={scrollY}
      />

      <View style={styles.secaoComentarios}>
        <ImageBackground
          source={{
            uri: "https://i.pinimg.com/1200x/37/3a/ba/373abaf0e7c9bd149bf7fa44082be1c8.jpg",
          }}
          resizeMode="cover"
          style={styles.fundoComentario}
        >
          <FormComentarios onEnviar={(dados) => console.log(dados)} />
        </ImageBackground>

        <FlatList
          renderItem={renderItem2}
          data={dados2}
          keyExtractor={(item) => item.id}
          style={styles.separaComentarios}
          scrollEnabled={false}
        />
      </View>

      <View style={styles.secaoTabs}>

        <TabsNavigation />

      </View>

    </Animated.ScrollView>
  );
}
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
  fundoEscuro: {
    backgroundColor: "#3f3f3f",
  },
  appbar: {
    backgroundColor: "#3f3f3f",
  },
  logo: {
    width: 70,
  },
  imagemFundo: {
    width: "100%",
    minHeight: 220,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingVertical: 25,
  },
  tituloCentral: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
  },
  secaoDesenvolvedores: {
    backgroundColor: "#25960c",
    padding: 20,
  },
  titleDesenvoldores: {
    color: "#ffff00",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    marginVertical: 15,
  },
  gradeDesenvoldores: {
    borderColor: "#ff8400",
    borderWidth: 2,
    borderRadius: 10,
    paddingTop: 20,
  },
  desenvolvedor: {
    width: 120,
    alignContent: "center",
    alignItems: "center",
  },
  foto: {
    width: 100,
  },
  nome: {
    color: "#FFF",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingTop: 5,
  },
  linhasGrade: {
    padding: 10,
    justifyContent: "space-between",
    alignContent: "center",
  },
  secaoObjetivo: {
    padding: 20,
  },
  titleObjetivo: {
    fontSize: 22,
    textAlign: "center",
    color: "#ff8400",
    fontWeight: "bold",
    paddingVertical: 20,
  },
  conteudoObjetivo: {
    textAlign: "center",
    lineHeight: 22.5,
  },
  secaoComentarios: {},
  fundoComentario: {
    width: "100%",
    padding: 20,
  },
  alinhamento: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nomeTitulo: {
    color: "#ed6700",
    fontWeight: "bold",
    fontSize: 22,
  },
  profissaoTitulo: {
    color: "#227100",
    fontWeight: "bold",
    fontSize: 15,
  },
  iconClose: {
    borderColor: "#ff0000",
    borderWidth: 2,
  },
  CardComentarios: {
    padding: 20,
    marginVertical:10,
    backgroundColor:"#FFF"
  },
  comentario: {
    textAlign: "justify",
    lineHeight: 22,
  },
  separaComentarios:{

    padding:20
  }
});
