import {
  StyleSheet,
  useWindowDimensions,
  Animated,
  View,
  Text,
} from "react-native";
import { useState } from "react";

const ALTURA_PARALLAX = 200;
const DESLOCAMENTO = 40;

export default function ParallaxComponent({ uri, texto, scrollY }) {

  const { height: alturaTela } = useWindowDimensions();
  const [parallaxY, setParallaxY] = useState(0);

  const translateY = scrollY.interpolate({

    inputRange: [parallaxY - alturaTela, parallaxY + ALTURA_PARALLAX],
    outputRange: [-DESLOCAMENTO, DESLOCAMENTO],
    extrapolate: "clamp",
  });

  return (

    <View
      style={styles.parallax}
      onLayout={(e) => setParallaxY(e.nativeEvent.layout.y)}
    >
      <Animated.Image
        source={{ uri }}
        resizeMode="cover"
        style={[styles.parallaxImagem, { transform: [{ translateY }] }]}
      />
      <View style={styles.parallaxOverlay}>
        <Text style={styles.parallaxTexto}>{texto}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

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
    textAlign:"center"
  },
});
