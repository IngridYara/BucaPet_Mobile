import * as React from "react";
import { Button, Card, Text} from "react-native-paper";
import { StyleSheet, View } from "react-native";
import EstrelasComponent from './EstrelasComponent'

export default function CardOngs(props) {

  const [avaliacao, setAvaliacao] = React.useState(0);

  return (

    <Card style={styles.containerCard}>
      <Card.Cover source={{ uri: props.uri }} />

      <Card.Content>
        <Text variant="titleLarge" style={styles.title}>
          {props.titulo}
        </Text>
        <Text variant="bodyMedium" style={styles.conteudo}>
          {props.conteudo}
        </Text>
      </Card.Content>

      <Card.Actions style={styles.avaliacao}>
        <Text style={styles.nota}>Nota: {props.nota}</Text>

        <View style={styles.avaliar}>
          <Text style={styles.conteudo}>Avaliar: </Text>
          <EstrelasComponent value={avaliacao} onChange={setAvaliacao} />
        </View>
      </Card.Actions>

      <Card.Actions>
        <Button
          textColor="#ffe600"
          labelStyle={{ fontWeight: "bold" }}
          style={styles.btn}
        >
          Contatar
        </Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({

  containerCard: {
    padding: 10,
    backgroundColor: "#FFF",
  },
  title: {
    color: "#00650e",
    paddingVertical: 10,
    fontWeight: "bold",
  },
  conteudo: {
    color: "#030303",
  },
  btn: {
    backgroundColor: "#014f07",
    width: "100%",
    borderRadius: 10,
  },
  avaliacao: {
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  nota: {
    color: "#030303",
    fontWeight: "bold",
    fontSize: 18,
  },
  avaliar: {
    flexDirection: "row",
    alignItems: "center",
  },
});
