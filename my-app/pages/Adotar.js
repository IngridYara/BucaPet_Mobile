import { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import AppHeader from '../components/AppHeader'
import FotoAuto from '../components/FotoAuto'
import FaixaFoto from '../components/FaixaFoto'
import SecaoTitulo from '../components/SecaoTitulo'
import CardPet from '../components/CardPet'
import { IMG } from '../assets/img'
import { pets, petDestaque, quiz } from '../data/pets'
import { colors } from '../theme/colors'

const TOTAL_PAGINAS = 3 // mock, como no protótipo

export default function Adotar() {
  const nav = useNavigation()
  const [pagina, setPagina] = useState(1)
  const [opcao, setOpcao] = useState(null)

  return (
    <View style={styles.tela}>
      <AppHeader onSearch={() => nav.navigate('ONGs')} />
      <ScrollView>
        <View style={styles.hero}>
          <View style={styles.fotos}>
            <View style={{ flex: 1 }}><FotoAuto source={IMG.heroAdotarCao} /></View>
            <View style={{ flex: 1 }}><FotoAuto source={IMG.heroAdotarGato} /></View>
          </View>
          <Text style={styles.painel}>Adote um anjinho para nunca mais se sentir sozinho</Text>
        </View>

        <View style={styles.lista}>
          <SecaoTitulo centro>ANIMAIS EM ADOÇÃO</SecaoTitulo>
          {pets.slice(0, 4).map((p) => (<CardPet key={p.id} pet={p} variante="lista" />))}
        </View>

        <View style={styles.destaque}>
          <Text style={styles.destaqueTitulo}>Pet em destaque</Text>
          <View style={styles.destaqueCard}>
            <FotoAuto source={petDestaque.foto} />
            <Text style={styles.chip}>{petDestaque.nome}</Text>
          </View>
        </View>

        <View style={styles.paginacao}>
          <TouchableOpacity style={styles.pag} onPress={() => setPagina((p) => Math.max(1, p - 1))}>
            <MaterialCommunityIcons name="chevron-left" size={22} color={colors.cinzaEscuro} />
          </TouchableOpacity>
          {[1, 2, 3].map((n) => (
            <TouchableOpacity key={n} style={[styles.pag, n === pagina && styles.pagAtiva]} onPress={() => setPagina(n)}>
              <Text style={[styles.pagTexto, n === pagina && { color: colors.branco }]}>{n}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.pag} onPress={() => setPagina((p) => Math.min(TOTAL_PAGINAS, p + 1))}>
            <MaterialCommunityIcons name="chevron-right" size={22} color={colors.cinzaEscuro} />
          </TouchableOpacity>
        </View>

        <FaixaFoto foto={IMG.bandOngs} botao="ONGS" onPressBotao={() => nav.navigate('ONGs')} />

        {/* Quiz (fundo: adicionar quiz-bg.png quando exportar do Figma) */}
        <View style={styles.quiz}>
          <View style={styles.quizCaixa}>
            <Text style={styles.quizIntro}>{quiz.introducao}</Text>
            <Text style={styles.quizPergunta}>{quiz.pergunta}</Text>
            {quiz.opcoes.map((o) => (
              <TouchableOpacity key={o} style={[styles.opcao, opcao === o && styles.opcaoAtiva]} onPress={() => setOpcao(o)}>
                <MaterialCommunityIcons name={opcao === o ? 'radiobox-marked' : 'radiobox-blank'} size={22} color={colors.laranja} />
                <Text style={styles.opcaoTexto}>{o}</Text>
              </TouchableOpacity>
            ))}
            <View style={styles.quizBotoes}>
              <TouchableOpacity style={[styles.qBtn, { backgroundColor: colors.cinzaEscuro }]}><Text style={styles.qBtnTexto}>Voltar</Text></TouchableOpacity>
              <TouchableOpacity style={[styles.qBtn, { backgroundColor: colors.verdeQuiz }]}><Text style={styles.qBtnTexto}>Próximo</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: colors.branco },
  hero: { backgroundColor: colors.cinzaEscuro },
  fotos: { flexDirection: 'row' },
  painel: { color: colors.branco, fontSize: 19, fontWeight: '700', padding: 20, paddingBottom: 28, borderLeftWidth: 5, borderLeftColor: colors.laranja, marginTop: 4 },
  lista: { padding: 16, gap: 22, backgroundColor: colors.cremeClaro },
  destaque: { backgroundColor: colors.cinzaEscuro, padding: 20, alignItems: 'center' },
  destaqueTitulo: { color: colors.amareloDestaque, fontSize: 22, fontWeight: '800', marginBottom: 14 },
  destaqueCard: { width: '100%', borderRadius: 16, overflow: 'hidden', backgroundColor: colors.verdeClaro },
  chip: { position: 'absolute', left: 10, bottom: 10, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 999, overflow: 'hidden', backgroundColor: colors.creme, fontWeight: '700', fontSize: 14 },
  paginacao: { flexDirection: 'row', justifyContent: 'center', gap: 8, paddingVertical: 24, backgroundColor: colors.branco },
  pag: { minWidth: 38, height: 38, borderRadius: 10, borderWidth: 1, borderColor: colors.cinzaBorda, alignItems: 'center', justifyContent: 'center' },
  pagAtiva: { backgroundColor: colors.laranja, borderColor: colors.laranja },
  pagTexto: { fontWeight: '600', color: colors.cinzaEscuro },
  quiz: { backgroundColor: colors.verdeQuiz, padding: 16, paddingVertical: 32 },
  quizCaixa: { backgroundColor: 'rgba(255,255,255,.96)', borderRadius: 18, padding: 20, gap: 10 },
  quizIntro: { fontSize: 14, fontWeight: '700', color: colors.verdeQuiz },
  quizPergunta: { fontSize: 19, fontWeight: '700' },
  opcao: { flexDirection: 'row', alignItems: 'center', gap: 10, padding: 11, borderWidth: 2, borderColor: colors.bordaInput, borderRadius: 12, backgroundColor: colors.cremeClaro },
  opcaoAtiva: { borderColor: colors.laranja },
  opcaoTexto: { fontSize: 14 },
  quizBotoes: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  qBtn: { paddingHorizontal: 26, paddingVertical: 10, borderRadius: 999 },
  qBtnTexto: { color: colors.branco, fontWeight: '700' },
})
