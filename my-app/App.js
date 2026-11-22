import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'

import Inicio from './pages/Inicio'
import Adotar from './pages/Adotar'
import Ongs from './pages/Ongs'
import Sobre from './pages/Sobre'
import Faqs from './pages/Faqs'
import { colors } from './theme/colors'

const Tab = createBottomTabNavigator()

const icones = {
  Início: 'home-outline',
  Adotar: 'paw-outline',
  ONGs: 'heart-outline',
  Sobre: 'information-outline',
  FAQs: 'help-circle-outline',
}

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <StatusBar style="light" />
          <Tab.Navigator
            initialRouteName="Início"
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarActiveTintColor: colors.laranjaClaro,
              tabBarInactiveTintColor: colors.branco,
              tabBarStyle: { backgroundColor: colors.verdeEscuro, borderTopWidth: 0 },
              tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
              tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name={icones[route.name]} size={size} color={color} />,
            })}
          >
            <Tab.Screen name="Início" component={Inicio} />
            <Tab.Screen name="Adotar" component={Adotar} />
            <Tab.Screen name="ONGs" component={Ongs} />
            <Tab.Screen name="Sobre" component={Sobre} />
            <Tab.Screen name="FAQs" component={Faqs} />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  )
}
