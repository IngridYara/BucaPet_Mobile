import { StyleSheet, Text, View } from 'react-native'
import Svg, { Circle } from 'react-native-svg'
import { colors } from '../theme/colors'

export default function Donut({ pct, cor, texto, tamanho = 110 }) {
  const traco = 14
  const r = (tamanho - traco) / 2
  const c = 2 * Math.PI * r
  return (
    <View style={styles.box}>
      <View style={{ width: tamanho, height: tamanho }}>
        <Svg width={tamanho} height={tamanho} style={{ transform: [{ rotate: '-90deg' }] }}>
          <Circle cx={tamanho / 2} cy={tamanho / 2} r={r} stroke={colors.cinzaBorda} strokeWidth={traco} fill="none" />
          <Circle cx={tamanho / 2} cy={tamanho / 2} r={r} stroke={cor} strokeWidth={traco} fill="none" strokeDasharray={`${(c * pct) / 100} ${c}`} strokeLinecap="round" />
        </Svg>
        <View style={styles.centro}><Text style={styles.pct}>{pct}%</Text></View>
      </View>
      <Text style={styles.texto}>{texto}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  box: { width: '50%', alignItems: 'center', gap: 8, marginBottom: 16 },
  centro: { ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center' },
  pct: { fontSize: 18, fontWeight: '800', color: colors.cinzaEscuro },
  texto: { fontSize: 12, textAlign: 'center', color: colors.cinzaEscuro, paddingHorizontal: 8 },
})
