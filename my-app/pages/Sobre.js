import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../theme/colors'

// Placeholder: tela ainda não implementada
export default function Sobre() {
  return (
    <View style={styles.tela}>
      <Text style={styles.texto}>Sobre — em breve</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  tela: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.branco },
  texto: { color: colors.verdeEscuro, fontSize: 20, fontWeight: '700' },
})
