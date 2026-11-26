import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
export default function FormComentarios({ onEnviar }) {
  const [dados, setDados] = useState({
    nome: "",
    ocupacao: "",
    comentario: "",
  });

  const atualizar = (campo, valor) =>
    setDados((anterior) => ({ ...anterior, [campo]: valor }));

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Adicione aqui seu comentário</Text>

      <View style={styles.campos}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          mode="outlined"
          value={dados.nome}
          onChangeText={(t) => atualizar("nome", t)}
          style={styles.input}
          outlineColor="#005f1c"
          activeOutlineColor="#ff7700"
        />
        <Text style={styles.label}>Ocupação:</Text>
        <TextInput
          mode="outlined"
          keyboardType="default"
          autoCapitalize="none"
          value={dados.ocupacao}
          onChangeText={(t) => atualizar("ocupacao", t)}
          style={styles.input}
          outlineColor="#005f1c"
          activeOutlineColor="#ff7700"
        />

        <TextInput
          mode="outlined"
          multiline
          autoCapitalize="none"
          placeholder="Digite aqui seu comentário"
          value={dados.comentario}
          onChangeText={(t) => atualizar("comentario", t)}
          style={[styles.input, styles.inputComentario]}
          outlineColor="#005f1c"
          contentStyle={styles.conteudoComentario}
          activeOutlineColor="#ff7700"
        />
      </View>

      <Button
        mode="contained"
        buttonColor="#4a7c59"
        textColor="#ffdd00"
        labelStyle={{ fontWeight: "bold" }}
        style={styles.botao}
        onPress={() => onEnviar?.(dados)}
      >
        Enviar
      </Button>
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
  titulo: {
    color: "#ff7700",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    marginVertical: 15,
  },
  campos: {
    marginVertical: 10,
  },
  label: {
    color: "#d9480f",
    fontWeight: "bold",
    fontSize: 13,
    marginBottom: 4,
    marginVertical: 10,
  },
  input: {
    backgroundColor: "#fff",
    height: 42,
    marginBottom: 10,
  },
  botao: {
    flex: 1,
    borderRadius: 8,
    marginTop: 8,
  },
  inputComentario: {
    minHeight: 200,
  },
  conteudoComentario: {

    textAlignVertical: "top",
    paddingTop: 12,
    textAlign: "left",
  },
});
