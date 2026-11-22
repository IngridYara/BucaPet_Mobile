import { Image } from 'react-native'
import { Asset } from 'expo-asset'

// Descobre largura/altura da imagem local (funciona no celular e na web)
function medidas(source) {
  try {
    if (typeof Image.resolveAssetSource === 'function') {
      const r = Image.resolveAssetSource(source)
      if (r && r.width && r.height) return r
    }
  } catch (e) {}
  try {
    const a = Asset.fromModule(source)
    if (a.width && a.height) return { width: a.width, height: a.height }
  } catch (e) {}
  return { width: 16, height: 9 }
}

// Imagem que ocupa a largura toda mantendo a proporção original (sem esticar)
export default function FotoAuto({ source, style }) {
  const { width, height } = medidas(source)
  return <Image source={source} style={[{ width: '100%', aspectRatio: width / height }, style]} resizeMode="cover" />
}
