import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppHeader from "../components/AppHeader";
import FaixaFoto from "../components/FaixaFoto";
import SecaoTitulo from "../components/SecaoTitulo";
import FaqAccordion from "../components/FaqAccordion";
import Donut from "../components/Donut";
import FotoAuto from "../components/FotoAuto";
import { IMG } from "../assets/img";
import { perguntas, estatisticas, graficos, dicas } from "../data/faqs";
import { colors } from "../theme/colors";

export default function Faqs() {

  const nav = useNavigation();

  return (

    <View style={styles.tela}>
      <AppHeader onSearch={() => nav.navigate("ONGs")} />
      <ScrollView>
        <FaixaFoto
          foto={IMG.faqHero}
          titulo="FIQUE POR DENTRO DE TUDO DO MUNDO ANIMAL!"
        />

        <View style={styles.secao}>
          <SecaoTitulo>Algumas das perguntas mais frequentes</SecaoTitulo>
          <FaqAccordion itens={perguntas} />
        </View>

        <FaixaFoto
          foto={IMG.faqBand}
          titulo="Abandono de animais é crime"
          onPress={() => {}}
        />

        <View style={styles.stats}>
          {estatisticas.map((e) => (
            <View key={e.valor} style={styles.stat}>
              <Text style={styles.statValor}>{e.valor}</Text>
              <Text style={styles.statTexto}>{e.texto}</Text>
            </View>
          ))}
        </View>

        <View style={styles.secao}>
          <SecaoTitulo>Veja Também</SecaoTitulo>
          <View style={styles.grade}>
            {graficos.map((g) => (
              <Donut
                key={g.texto}
                pct={g.pct}
                texto={g.texto}
                cor={g.laranja ? colors.laranja : colors.verde}
              />
            ))}
          </View>
        </View>

        <View style={styles.secao}>
          <SecaoTitulo>Confira também algumas dicas</SecaoTitulo>
          <View style={styles.grade}>
            {dicas.map((d) => (
              <View key={d.titulo} style={styles.dicaBox}>
                <View style={styles.dica}>
                  <FotoAuto source={d.foto} />
                  <Text style={styles.dicaTitulo}>{d.titulo}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={{ paddingHorizontal: 16, paddingBottom: 24 }}>
          <View style={{ borderRadius: 16, overflow: "hidden" }}>
            <FaixaFoto
              foto={IMG.faqDenuncia}
              titulo="Denuncie Maus Tratos"
              onPress={() => {}}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  tela: { 
    flex: 1, 
    backgroundColor: colors.branco 
  },
  secao: { 
    padding: 16, 
    paddingVertical: 24 
  },
  stats: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    padding: 16,
    backgroundColor: colors.verdeEscuro,
  },
  stat: {
    width: "47.5%",
    backgroundColor: "rgba(255,255,255,.1)",
    borderRadius: 12,
    padding: 14,
    gap: 4,
  },
  statValor: { 
    color: colors.amareloDestaque, 
    fontSize: 22, 
    fontWeight: "800" 
  },
  statTexto: { 
    color: colors.branco, 
    fontSize: 12 
  },
  grade: { 
    flexDirection: "row", 
    flexWrap: "wrap" 
  },
  dicaBox: { width: "50%", 
    padding: 6 
  },
  dica: {
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: colors.verdeClaro,
  },
  dicaTitulo: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 8,
    color: colors.branco,
    fontWeight: "700",
    fontSize: 14,
    backgroundColor: "rgba(0,0,0,.55)",
  },
});
