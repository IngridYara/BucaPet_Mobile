import { StyleSheet, Text, View } from 'react-native'
import FotoAuto from './FotoAuto'
import { IMG } from '../assets/img'
import { colors } from '../theme/colors'

export default function DenunciaSection() {
  return (
    <View style={styles.secao}>
      <Text style={styles.titulo}>DENUNCIE MAUS TRATOS!!</Text>
      <FotoAuto source={IMG.denuncia} style={{ borderRadius: 12 }} />
      <Text style={styles.texto}>
        Maus tratos a animais são crime. Se você presenciar ou souber de alguma situação, denuncie aos órgãos competentes.
      </Text>
      <Text style={styles.texto}><Text style={styles.negrito}>Telefone:</Text> 0800 61 8080</Text>
      <Text style={styles.texto}><Text style={styles.negrito}>E-mail:</Text> linhaverde.sede@ibama.gov.br</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  secao: { backgroundColor: colors.cinzaEscuro, padding: 20, gap: 12 },
  titulo: { color: colors.amareloDestaque, fontSize: 23, fontWeight: '800', textAlign: 'center' },
  texto: { color: colors.branco, fontSize: 14, lineHeight: 21 },
  negrito: { fontWeight: '800' },
})
