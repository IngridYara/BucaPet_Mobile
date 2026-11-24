import { Image, StyleSheet, Text, View } from 'react-native'
import { Appbar } from 'react-native-paper'
import { IMG } from '../assets/img'
import { colors } from '../theme/colors'

export default function AppHeader({ onSearch }) {
  return (
    <Appbar.Header style={styles.bar}>
      <View style={styles.marca}>
        <Image source={IMG.logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.titulo}>BuscaPET</Text>
      </View>
      <Appbar.Action icon="magnify" color={colors.branco} onPress={onSearch} />
    </Appbar.Header>
  )
}

const styles = StyleSheet.create({
  bar: { backgroundColor: colors.verdeEscuro, justifyContent: 'space-between', paddingHorizontal: 8 },
  marca: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  logo: { width: 40, height: 38 },
  titulo: { color: colors.amareloTitulo, fontSize: 21, fontWeight: '800' },
})
