import { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  useWindowDimensions,
} from "react-native";
import { TextInput, Button, Switch, Menu } from "react-native-paper";
import Slider from "@react-native-community/slider";

const ESTADOS = ["MG", "SP", "RJ", "ES", "BA", "PR", "RS", "SC"];

const PERGUNTAS = [
  {
    campo: "freqAdocoes",
    texto: "Qual a frequência de adoções na sua ong?",
  },
  {
    campo: "qtdAnimais",
    texto: "Quantos animais estão sobre sua proteção ?",
  },
  {
    campo: "tempoFila",
    texto:
      "Qual o tempo médio que um animal fica na fila de adoção em sua ong?",
  },
  {
    campo: "tempoCuidados",
    texto: "Quanto tempo você pode dedicar aos cuidados?",
  },
];

export default function FormCadastroOng({ onEnviar }) {
  
  const [menuAberto, setMenuAberto] = useState(false);
  const { width: larguraTela } = useWindowDimensions();
  const [etapa, setEtapa] = useState(0);
  const anim = useRef(new Animated.Value(0)).current;
  const progresso = useRef(new Animated.Value(0.5)).current;

  const [dados, setDados] = useState({
    nome: "",
    telefone: "",
    whatsapp: "",
    email: "",
    endereco: "",
    estado: "",
    freqAdocoes: 5,
    qtdAnimais: 5,
    tempoFila: 5,
    tempoCuidados: 5,
    recolheRua: false,
    aceitaDoentes: false,
  });

  const atualizar = (campo, valor) =>
    setDados((anterior) => ({ ...anterior, [campo]: valor }));

  const irParaEtapa = (n) => {
    const direcao = n > etapa ? 1 : -1;
    anim.setValue(direcao * larguraTela);
    setEtapa(n);

    Animated.timing(anim, {
      toValue: 0,
      duration: 300,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();

    Animated.timing(progresso, {
      toValue: (n + 1) / 2,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (

    <View style={styles.card}>
      <Text style={styles.parte}>Parte {etapa + 1} de 2</Text>

      <View style={styles.trilho}>
        <Animated.View
          style={[
            styles.preenchimento,
            {
              width: progresso.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", "100%"],
              }),
            },
          ]}
        />
      </View>

      <View style={styles.janela}>
        <Animated.View style={{ transform: [{ translateX: anim }] }}>
          {etapa === 0 ? (
            <View>
              <Text style={styles.titulo}>Contatos</Text>

              <Text style={styles.label}>Nome da Organização:</Text>
              <TextInput
                mode="outlined"
                value={dados.nome}
                onChangeText={(t) => atualizar("nome", t)}
                style={styles.input}
                outlineColor="#fcdf00"
                activeOutlineColor="#ff7700"
              />

              <View style={styles.linha}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.label}>Telefone:</Text>
                  <TextInput
                    mode="outlined"
                    keyboardType="phone-pad"
                    value={dados.telefone}
                    onChangeText={(t) => atualizar("telefone", t)}
                    style={styles.input}
                    outlineColor="#fcdf00"
                    activeOutlineColor="#ff7700"
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.label}>Whatsapp:</Text>
                  <TextInput
                    mode="outlined"
                    keyboardType="phone-pad"
                    value={dados.whatsapp}
                    onChangeText={(t) => atualizar("whatsapp", t)}
                    style={styles.input}
                    outlineColor="#fcdf00"
                    activeOutlineColor="#ff7700"
                  />
                </View>
              </View>

              <Text style={styles.label}>Email:</Text>
              <TextInput
                mode="outlined"
                keyboardType="email-address"
                autoCapitalize="none"
                value={dados.email}
                onChangeText={(t) => atualizar("email", t)}
                style={styles.input}
                outlineColor="#fcdf00"
                activeOutlineColor="#ff7700"
              />

              <Text style={styles.label}>Endereço:</Text>
              <TextInput
                mode="outlined"
                value={dados.endereco}
                onChangeText={(t) => atualizar("endereco", t)}
                style={styles.input}
                outlineColor="#fcdf00"
                activeOutlineColor="#ff7700"
              />

              <Text style={styles.label}>Estado:</Text>
              <Menu
                visible={menuAberto}
                onDismiss={() => setMenuAberto(false)}
                anchor={
                  <Button
                    mode="outlined"
                    onPress={() => setMenuAberto(true)}
                    contentStyle={styles.estadoConteudo}
                    style={styles.estado}
                    textColor="#333"
                    icon="chevron-down"
                  >
                    {dados.estado || "Selecione"}
                  </Button>
                }
              >
                {ESTADOS.map((uf) => (
                  <Menu.Item
                    key={uf}
                    title={uf}
                    onPress={() => {
                      atualizar("estado", uf);
                      setMenuAberto(false);
                    }}
                  />
                ))}
              </Menu>

              <Button
                mode="contained"
                buttonColor="#4a7c59"
                style={styles.botao}
                onPress={() => irParaEtapa(1)}
              >
                Próximo
              </Button>
            </View>
          ) : (
            <View>
              <Text style={styles.titulo}>Informações adicionais</Text>

              {PERGUNTAS.map(({ campo, texto }) => (
                <View key={campo} style={{ marginBottom: 8 }}>
                  <Text style={styles.label}>{texto}</Text>
                  <Slider
                    minimumValue={0}
                    maximumValue={10}
                    step={1}
                    value={dados[campo]}
                    onValueChange={(v) => atualizar(campo, v)}
                    minimumTrackTintColor="#256100"
                    thumbTintColor="#256100"
                  />
                  <View style={styles.extremos}>
                    <Text>Pouca</Text>
                    <Text>Muita</Text>
                  </View>
                </View>
              ))}

              <View style={styles.switchLinha}>
                <Text style={[styles.label, { flex: 1 }]}>
                  Vocês recolhem animais em situação de rua?
                </Text>
                <Switch
                  value={dados.recolheRua}
                  color="#4a7c59"
                  onValueChange={(v) => atualizar("recolheRua", v)}
                />
              </View>

              <View style={styles.switchLinha}>
                <Text style={[styles.label, { flex: 1 }]}>
                  Vocês aceitam animais doentes?
                </Text>
                <Switch
                  value={dados.aceitaDoentes}
                  color="#4a7c59"
                  onValueChange={(v) => atualizar("aceitaDoentes", v)}
                />
              </View>

              <View style={styles.linha}>
                <Button
                  mode="contained"
                  buttonColor="#4a7c59"
                  style={styles.botaoMetade}
                  onPress={() => irParaEtapa(0)}
                >
                  Voltar
                </Button>
                <Button
                  mode="contained"
                  buttonColor="#4a7c59"
                  style={styles.botaoMetade}
                  onPress={() => onEnviar?.(dados)}
                >
                  Enviar
                </Button>
              </View>
            </View>
          )}
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#fffdf0",
    borderRadius: 16,
    padding: 16,
  },
  parte: {
    fontSize: 12,
    color: "#333",
    marginBottom: 6,
  },
  progresso: {
    height: 6,
    borderRadius: 3,
    backgroundColor: "#ddd",
    marginBottom: 12,
  },
  janela: {
    overflow: "hidden",
  },
  titulo: {
    color: "#ff7700",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 12,
  },
  label: {
    color: "#d9480f",
    fontWeight:"bold",
    fontSize: 13,
    marginBottom: 4,
    paddingTop:5
  },
  input: {
    backgroundColor: "#fff",
    height: 42,
    marginBottom: 10,
  },
  linha: {
    flexDirection: "row",
    gap: 10,
  },
  extremos: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  switchLinha: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  estado: {
    borderColor: "#fcdf00",
    borderRadius: 4,
    backgroundColor: "#fff",
    marginBottom: 14,
  },
  estadoConteudo: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  botao: {
    marginTop: 4,
    borderRadius: 8,
  },
  botaoMetade: {
    flex: 1,
    borderRadius: 8,
    marginTop: 8,
  },
  trilho: {
    height: 6,
    borderRadius: 3,
    backgroundColor: "#ddd",
    marginBottom: 12,
    overflow: "hidden",
  },
  preenchimento: {
    height: "100%",
    backgroundColor: "#256100",
  },
});
