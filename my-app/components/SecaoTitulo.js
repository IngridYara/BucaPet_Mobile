import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../theme/colors'

export default function SecaoTitulo({ children, cor = colors.verdeEscuro, centro = false }) {
  return (
    <View style={{ alignItems: centro ? 'center' : 'flex-start', marginBottom: 14 }}>
      <Text style={[styles.texto, { color: cor }]}>{children}</Text>
      <View style={styles.traco} />
    </View>
  )
}
const styles = StyleSheet.create({
  texto: { fontSize: 22, fontWeight: '800' },
  traco: { width: 48, height: 4, borderRadius: 4, marginTop: 6, backgroundColor: colors.laranja },
})
