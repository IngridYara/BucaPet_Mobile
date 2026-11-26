import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../theme/colors";

export default function FaqAccordion({ itens }) {

  const [aberto, setAberto] = useState(null);

  return (
    
    <View style={{ gap: 10 }}>
      {itens.map((item, i) => {
        const aberta = aberto === i;
        return (
          <View key={item.pergunta} style={styles.item}>
            <TouchableOpacity
              style={styles.pergunta}
              onPress={() => setAberto(aberta ? null : i)}
            >
              <Text style={styles.perguntaTexto}>{item.pergunta}</Text>
              <MaterialCommunityIcons
                name={aberta ? "chevron-up" : "chevron-down"}
                size={24}
                color={colors.cinzaEscuro}
              />
            </TouchableOpacity>
            {aberta && <Text style={styles.resposta}>{item.resposta}</Text>}
          </View>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({

  item: {
    backgroundColor: colors.cremeClaro,
    borderWidth: 1,
    borderColor: colors.bordaInput,
    borderRadius: 12,
    overflow: "hidden",
  },
  pergunta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: 14,
  },
  perguntaTexto: {
    flex: 1,
    fontSize: 14,
    fontWeight: "600",
    color: colors.cinzaEscuro,
  },
  resposta: {
    paddingHorizontal: 14,
    paddingBottom: 14,
    fontSize: 13,
    lineHeight: 19,
    color: colors.cinzaEscuro,
  },
});
