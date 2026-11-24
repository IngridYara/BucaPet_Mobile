import { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import CardPet from './CardPet'
import { colors } from '../theme/colors'

export default function PetCarousel({ pets }) {
  const [ativo, setAtivo] = useState(0)
  return (
    <View>
      <FlatList
        horizontal
        data={pets}
        keyExtractor={(p) => p.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, gap: 12 }}
        renderItem={({ item }) => <CardPet pet={item} variante="compacto" />}
        snapToInterval={160}
        decelerationRate="fast"
        onScroll={(e) => setAtivo(Math.min(pets.length - 1, Math.round(e.nativeEvent.contentOffset.x / 160)))}
        scrollEventThrottle={16}
      />
      <View style={styles.dots}>
        {pets.map((p, i) => (
          <View key={p.id} style={[styles.dot, i === ativo && styles.dotAtivo]} />
        ))}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  dots: { flexDirection: 'row', justifyContent: 'center', gap: 8, marginTop: 12 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.cinzaBorda },
  dotAtivo: { backgroundColor: colors.laranja },
})
