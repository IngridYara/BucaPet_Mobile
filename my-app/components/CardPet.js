import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FotoAuto from "./FotoAuto";
import { colors } from "../theme/colors";

export default function CardPet({ pet, variante = "lista", onPress }) {
  if (variante === "compacto") {
    return (
      <TouchableOpacity
        style={styles.compacto}
        onPress={onPress}
        activeOpacity={0.85}
      >
        <Image
          source={pet.foto}
          style={styles.fotoCompacta}
          resizeMode="cover"
        />
        <Text style={styles.chip}>{pet.nome}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.lista}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
        <FotoAuto source={pet.foto} />
        <Text style={styles.chip}>{pet.nome}</Text>
      </TouchableOpacity>
      <Text style={styles.desc}>{pet.descricao}</Text>
      <View style={styles.rodape}>
        <View style={styles.curtidas}>
          <MaterialCommunityIcons
            name="heart"
            size={22}
            color={colors.vermelho}
          />
          <Text style={styles.curtidasTexto}>{pet.curtidas}</Text>
        </View>
        <TouchableOpacity style={styles.adotar} onPress={onPress}>
          <Text style={styles.adotarTexto}>Adotar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  compacto: {
    width: 148,
    height: 168,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: colors.verdeClaro,
    elevation: 4,
  },
  fotoCompacta: { width: 148, height: 168 },
  chip: {
    position: "absolute",
    left: 10,
    bottom: 10,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 999,
    overflow: "hidden",
    backgroundColor: colors.creme,
    color: colors.cinzaEscuro,
    fontWeight: "700",
    fontSize: 14,
  },
  lista: {
    backgroundColor: colors.branco,
    borderRadius: 18,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.cinzaBorda,
    elevation: 3,
  },
  desc: {
    padding: 16,
    paddingBottom: 6,
    fontSize: 13,
    lineHeight: 19,
    color: colors.cinzaEscuro,
  },
  rodape: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    paddingTop: 8,
  },
  curtidas: { flexDirection: "row", alignItems: "center", gap: 6 },
  curtidasTexto: { color: colors.vermelho, fontWeight: "700" },
  adotar: {
    backgroundColor: colors.verde,
    paddingHorizontal: 30,
    paddingVertical: 9,
    borderRadius: 999,
  },
  adotarTexto: { color: colors.branco, fontWeight: "700" },
});
