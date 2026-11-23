import { View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

const EstrelasComponent = ({ value = 0, onChange, size = 22, total = 5 }) => (
  
  <View style={styles.linha}>
    {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
      <IconButton
        key={n}
        icon={n <= value ? 'star' : 'star-outline'}
        iconColor="#f5b800"
        size={size}
        style={styles.estrela}
        onPress={() => onChange?.(n)}
        accessibilityLabel={`Avaliar com ${n} estrela${n > 1 ? 's' : ''}`}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  estrela: {
    margin: 0,  
  },
});

export default EstrelasComponent;