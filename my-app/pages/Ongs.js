import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  FlatList,
  Animated,
  useWindowDimensions,
} from "react-native";
import { Appbar, IconButton } from "react-native-paper";
import { useRef, useState } from "react";
import CardComponent from "./../components/Card";
import SearchbarComponent from "./../components/Searchbar";
import ButtonComponent from "./../components/Button";
import CardOngs from "./../components/CardOngs";
import FormCadastroOng from "./../components/FormCadastroOngs";

const ALTURA_PARALLAX = 200;
const DESLOCAMENTO = 40;

export default function Ongs() {

  const { height: alturaTela } = useWindowDimensions();
  const scrollY = useRef(new Animated.Value(0)).current;
  const [parallaxY, setParallaxY] = useState(0);

  const translateY = scrollY.interpolate({
    inputRange: [parallaxY - alturaTela, parallaxY + ALTURA_PARALLAX],
    outputRange: [-DESLOCAMENTO, DESLOCAMENTO],
    extrapolate: "clamp",
  });

  const dados = [
    {
      id: "1",
      titulo: "AMPARA Animal",
      conteudo:
        "O Instituto Ampara Animal é uma organização não governamental (OSCIP) brasileira fundada em agosto de 2010, focada na proteção de animais domésticos e na conservação da fauna silvestre.",
      nota: "4.7",
      uri: "https://storage.googleapis.com/atados-v3/user-uploaded/images/c0568d33-18c9-4968-809f-e5bc89dbc796.png",
    },
    {
      id: "2",
      titulo: "ONG Cão Sem Dono",
      conteudo:
        "O Cão Sem Dono é uma ONG (Organização Não Governamental), sem fins lucrativos, que nasceu de um grande sonho do seu atual presidente: tirar o maior número possível de animais das ruas, dar tratamento adequado e integrá-los a famílias.",
      nota: "3.4",
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT19Ki3UFOpDkzlwqqtQsNuyxInPV7IE3wNb6lc7DRPZg&s",
    },
  ];

  const dados2 = [
    {
      id: "1",
      coluna: 0,
      altura: 210,
      uri: "https://i.pinimg.com/736x/5b/fc/a6/5bfca6428794b54795bd35b856335e6a.jpg",
    },
    {
      id: "2",
      coluna: 1,
      altura: 150,
      uri: "https://i.pinimg.com/736x/ce/ba/b3/cebab31d97b5e0265946ccaec15277a2.jpg",
    },
    {
      id: "3",
      coluna: 0,
      altura: 150,
      uri: "https://i.pinimg.com/736x/f9/bd/6c/f9bd6c2451daec4c04c891898047e0fb.jpg",
    },
    {
      id: "4",
      coluna: 1,
      altura: 110,
      uri: "https://i.pinimg.com/736x/3c/57/84/3c5784e88c77e1b196b5ed350f6ed2be.jpg",
    },
    {
      id: "5",
      coluna: 0,
      altura: 200,
      uri: "https://i.pinimg.com/736x/cf/be/e9/cfbee975affaa347e2cc53919e2f54f5.jpg",
    },
    {
      id: "6",
      coluna: 1,
      altura: 200,
      uri: "https://i.pinimg.com/736x/c3/9f/a7/c39fa707ce4fcf6b727a4c898f86b820.jpg",
    },
    {
      id: "7",
      coluna: 1,
      altura: 90,
      uri: "https://i.pinimg.com/736x/40/52/b7/4052b7912c345e90b534de02fe114f72.jpg",
    },
  ];

  const renderItem = ({ item }) => (
    <CardOngs
      titulo={item.titulo}
      conteudo={item.conteudo}
      nota={item.nota}
      uri={item.uri}
    />
  );

  const renderColuna = (indice) => (
    <View style={styles.coluna}>
      {dados2
        .filter((item) => item.coluna === indice)
        .map((item) => (
          <Image
            key={item.id}
            source={{ uri: item.uri }}
            resizeMode="cover"
            style={[styles.fotoAnimal, { height: item.altura }]}
          />
        ))}
    </View>
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
            source={require("./../assets/logo.png")}
            resizeMode="contain"
            style={styles.logo}
          />
          <Appbar.Content title="ONGS" color="#fff26a" />
          <Appbar.Action icon="magnify" color="#fefce9" onPress={() => {}} />
        </Appbar.Header>

        <ImageBackground
          source={require("./../assets/ONGSFundo.png")}
          resizeMode="cover"
          style={styles.imagemFundo}
        >
          <CardComponent />
        </ImageBackground>

        <View style={styles.secaoPesquisa}>
          <Text style={styles.titleParceiros}>
            Conheça alguns dos nossos parceiros!!!
          </Text>

          <View style={styles.pesquisa}>

            <SearchbarComponent />
            <IconButton
              icon="magnify"
              mode="contained"
              iconColor="#256100"
              style={{ backgroundColor: "#e6ff02" }}
              size={24}
              onPress={() => {}}
            />
          </View>

          <ButtonComponent
            text="Cadastre sua instituição aqui"
            largura="100"
            icon="arrow-right"
          />
        </View>
      </View>

      <View style={styles.secaoOngs}>
        <FlatList
          data={dados}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.parallax}
        onLayout={(e) => setParallaxY(e.nativeEvent.layout.y)}
      >
        <Animated.Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbvAkIl2guHMd5PY3ayEsMjMlC7GA83w0HV4LjCBtd7g&s=10",
          }}
          resizeMode="cover"
          style={[styles.parallaxImagem, { transform: [{ translateY }] }]}
        />
        <View style={styles.parallaxOverlay}>
          <Text style={styles.parallaxTexto}>Conheça essas maravilhas</Text>
        </View>
      </View>

      <View style={styles.secaoDisponiveis}>
        <Text style={styles.tituloDisponiveis}>
          Conheça alguns animais disponíveis para adotar!
        </Text>

        <View style={styles.gradeAnimais}>
          {renderColuna(0)}
          {renderColuna(1)}
        </View>
      </View>

      <View style={styles.secaoCadastro}>
        <Text style={styles.tituloCadastro}>Cadastre sua instituição aqui</Text>

        <ImageBackground
          source={{
            uri: "https://i.pinimg.com/736x/87/af/aa/87afaaa7b5b3156e4566c5fa9e3525fd.jpg",
          }}
          resizeMode="cover"
          style={styles.fundoCadastro}
        >
          <FormCadastroOng onEnviar={(dados) => console.log(dados)} />
        </ImageBackground>
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
    justifyContent: "center",
    paddingVertical: 25,
  },
  secaoPesquisa: {
    alignItems: "center",
    backgroundColor: "#3f3f3f",
    padding: 20,
  },
  titleParceiros: {
    color: "#ff7700",
    fontWeight: "bold",
    fontSize: 18,
    paddingBottom: 15,
  },
  pesquisa: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 20,
    width: "100%",
  },
  secaoOngs: {
    padding: 20,
  },
  parallax: {
    height: ALTURA_PARALLAX,
    overflow: "hidden",
  },
  parallaxImagem: {
    position: "absolute",
    top: -DESLOCAMENTO,
    width: "100%",
    height: ALTURA_PARALLAX + DESLOCAMENTO * 2,
  },
  parallaxOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.25)",
    paddingBottom: 12,
  },
  parallaxTexto: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  secaoDisponiveis: {
    backgroundColor: "#3f3f3f",
    padding: 20,
    alignContent: "center",
    alignItems: "center",
  },
  tituloDisponiveis: {
    color: "#fcdf00",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
  },
  gradeAnimais: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
    marginTop: 20,
    width: "100%",
    borderColor: "#ff7700",
    borderWidth: 1,
    borderRadius: 8,
  },
  coluna: {
    flex: 1,
    gap: 10,
  },
  fotoAnimal: {
    width: "100%",
    borderRadius: 8,
  },
  secaoCadastro: {
    marginVertical:20
    
  },
  fundoCadastro: {
    width: "100%",
    padding: 20,
  },
  tituloCadastro: {
    color: "#fcdf00",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 16,
  },
});
