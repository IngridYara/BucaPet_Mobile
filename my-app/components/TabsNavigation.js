import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const dados = [
  {
    id: "1",
    image: { uri: "https://i.pinimg.com/1200x/af/d5/41/afd5413e3f843edb5e9c36ad5deae2de.jpg" },
    title: "Cachorros",
    subtitle: "Transformam dias comuns em momentos de pura alegria e lealdade.",
    text: "Cão, no Brasil também chamado de cachorro, é um mamífero carnívoro da família dos canídeos, subespécie do lobo, e talvez o mais antigo animal domesticado pelo ser humano. Teorias postulam que surgiu do lobo cinzento no continente asiático há mais de 100 000 anos.",
  },
  {
    id: "2",
    image: { uri: "https://i.pinimg.com/736x/06/f5/d1/06f5d1f535149d7e5b8030a68b28575e.jpg" },
    title: "Gatos",
    subtitle: "Trazem paz, mistério e aconchego em cada ronronar.",
    text: "Gato doméstico (Felis catus) é um mamífero carnívoro da família dos felídeos, amplamente criado como animal de companhia e com convivência histórica com os seres humanos há cerca de 9.500 a 12.000 anos.",
  },
  {
    id: "3",
    image: { uri: "https://i.pinimg.com/736x/2e/4a/af/2e4aafae9bd248e014cf25870e366bb4.jpg" },
    title: "Pássaros",
    subtitle: "Enchem a casa de música, cor e leveza a cada canto.",
    text: "Os principais pássaros domésticos incluem calopsita, periquito-australiano, canário belga (do reino), agapornis, diamante mandarim e manon. No Brasil, verifique sempre a origem legal e a regulamentação ambiental (como regras do Ibama e exigência de nota fiscal em criadouros autorizados, conforme a espécie) antes de adotar ou comprar.",
  },
];

export default function TabsSection({ tabs = dados, height = 340 }) {

  const [activeIndex, setActiveIndex] = useState(0);

  const fades = useRef(
    tabs.map((_, i) => new Animated.Value(i === 0 ? 1 : 0))
  ).current;

  useEffect(() => {
    Animated.parallel(
      fades.map((value, i) =>
        Animated.timing(value, {
          toValue: i === activeIndex ? 1 : 0,
          duration: 350,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        })
      )
    ).start();
  }, [activeIndex, fades]);

  return (

    <View style={styles.container}>
      <View style={styles.tabBar} accessibilityRole="tablist">
        {tabs.map((tab, i) => {
          const selected = i === activeIndex;

          return (

            <Pressable
              key={tab.id}
              onPress={() => setActiveIndex(i)}
              accessibilityRole="tab"
              accessibilityState={{ selected }}
              style={[styles.tab, selected && styles.tabActive]}
            >
              <Text
                style={[styles.tabLabel, selected && styles.tabLabelActive]}
                numberOfLines={1}
              >
                {tab.title}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <View style={[styles.stage, { height }]}>
        {tabs.map((tab, i) => (
          <Animated.Image
            key={`bg-${tab.id}`}
            source={tab.image}
            resizeMode="cover"
            style={[StyleSheet.absoluteFill, { opacity: fades[i] }]}
          />
        ))}

        {tabs.map((tab, i) => (
          <Animated.View
            key={`content-${tab.id}`}
            pointerEvents={i === activeIndex ? "auto" : "none"}
            style={[
              StyleSheet.absoluteFill,
              styles.cardWrapper,
              {
                opacity: fades[i],
                transform: [
                  {
                    translateY: fades[i].interpolate({
                      inputRange: [0, 1],
                      outputRange: [12, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <View style={styles.card}>
              <Text style={styles.title}>{tab.title}</Text>
              <Text style={styles.subtitle}>{tab.subtitle}</Text>
              <Text style={styles.body}>{tab.text}</Text>
            </View>
          </Animated.View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    width: "100%",
    backgroundColor: "#1B1B1B",
  },
  tabBar: {
    flexDirection: "row",
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:  "#1d9842" ,
  },
  tabActive: {
    backgroundColor: "#F07F3C",
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: "#ffffff",
  },
  tabLabelActive: {
    color: "#FFFFFF",
  },
  stage: {
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#000",
  },
  cardWrapper: {
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "rgba(30, 30, 30, 0.82)",
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 18,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#F07F3C",
  },
  subtitle: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: "700",
    color: "#F5D547",
  },
  body: {
    marginTop: 10,
    fontSize: 13,
    lineHeight: 19,
    color: "#FFFF",
  },
});
