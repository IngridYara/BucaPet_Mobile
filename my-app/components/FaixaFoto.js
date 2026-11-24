import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FotoAuto from './FotoAuto'
import { colors } from '../theme/colors'

// Faixa com foto. Pode ter botão circular no centro ("ONGS", "Sobre") e/ou título embaixo
export default function FaixaFoto({ foto, botao, onPressBotao, titulo, onPress }) {
  const Conteudo = onPress ? TouchableOpacity : View
  return (
    <Conteudo style={styles.faixa} onPress={onPress} activeOpacity={0.85}>
      <FotoAuto source={foto} />
      {(botao || titulo) && <View style={styles.escurecer} pointerEvents="none" />}
      {titulo && <Text style={styles.titulo}>{titulo}</Text>}
      {botao && (
        <TouchableOpacity style={styles.botao} onPress={onPressBotao} activeOpacity={0.85}>
          <Text style={styles.botaoTexto}>{botao}</Text>
        </TouchableOpacity>
      )}
    </Conteudo>
  )
}
const styles = StyleSheet.create({
  faixa: { position: 'relative', backgroundColor: colors.verdeClaro },
  escurecer: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.28)' },
  titulo: { position: 'absolute', left: 20, right: 20, bottom: 14, color: colors.amareloTitulo, fontSize: 21, fontWeight: '800', textShadowColor: 'rgba(0,0,0,.6)', textShadowRadius: 4 },
  botao: { position: 'absolute', alignSelf: 'center', top: '50%', marginTop: -50, width: 100, height: 100, borderRadius: 50, backgroundColor: colors.laranja, borderWidth: 4, borderColor: colors.branco, alignItems: 'center', justifyContent: 'center', elevation: 6 },
  botaoTexto: { color: colors.branco, fontSize: 18, fontWeight: '800' },
})
