import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const SearchbarComponent = () => {

  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    
    <Searchbar
      placeholder="Pesquisar ONGs"
      placeholderTextColor={"#616161"}
      onChangeText={setSearchQuery}
      value={searchQuery}
      style={styles.barraPesquisa}
      iconColor='#000000'
      inputStyle={{color:'#000000'}}
      
    />
  );
};

const styles = StyleSheet.create({

    barraPesquisa:{

      backgroundColor: "#fff",
      
    }
    
})

export default SearchbarComponent;
