import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AppHeader from '../components/AppHeader'
import FotoAuto from '../components/FotoAuto'
import FaixaFoto from '../components/FaixaFoto'
import SecaoTitulo from '../components/SecaoTitulo'
import PetCarousel from '../components/PetCarousel'
import DenunciaSection from '../components/DenunciaSection'
import { IMG } from '../assets/img'
import { petsCarrossel } from '../data/pets'
import { colors } from '../theme/colors'

export default function Inicio() {
  const nav = useNavigation()
  return (
    <View style={styles.tela}>
      <AppHeader onSearch={() => nav.navigate('ONGs')} />
      <ScrollView>
        {/* A foto já traz o título "Nada é melhor do que um lar!!" do Figma */}
        <FotoAuto source={IMG.heroHome} />

        <View style={styles.objetivo}>
          <SecaoTitulo>Nosso Objetivo</SecaoTitulo>
          {/* TODO: conferir o texto exato no Figma */}
          <Text style={styles.texto}>
            O BuscaPET conecta pessoas a animais que precisam de um lar, reunindo ONGs, pets disponíveis para adoção e informações para uma adoção responsável.
          </Text>
        </View>

        <FaixaFoto foto={IMG.bandGato} titulo="Venha conhecer esses bichinhos maravilhosos" />

        <View style={styles.carrossel}>
          <View style={{ paddingHorizontal: 22 }}><SecaoTitulo cor={colors.laranja}>Encontre aqui o seu melhor amigo</SecaoTitulo></View>
          <PetCarousel pets={petsCarrossel} />
          <TouchableOpacity style={styles.verMais} onPress={() => nav.navigate('Adotar')}>
            <Text style={styles.verMaisTexto}>Ver todos os animais</Text>
          </TouchableOpacity>
        </View>

        <FaixaFoto foto={IMG.bandOngs} botao="ONGS" onPressBotao={() => nav.navigate('ONGs')} />
        <DenunciaSection />
        <FaixaFoto foto={IMG.bandSobre} botao="Sobre" onPressBotao={() => nav.navigate('Sobre')} />
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: colors.branco },
  objetivo: { padding: 22, backgroundColor: colors.cremeClaro },
  texto: { fontSize: 14, lineHeight: 22, color: colors.cinzaEscuro },
  carrossel: { paddingVertical: 28, backgroundColor: colors.branco },
  verMais: { alignSelf: 'center', marginTop: 18, backgroundColor: colors.laranja, paddingHorizontal: 26, paddingVertical: 10, borderRadius: 999 },
  verMaisTexto: { color: colors.branco, fontWeight: '700' },
})
