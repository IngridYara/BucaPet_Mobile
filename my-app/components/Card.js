import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CardComponent = () => (
  <Card style={styles.container}>
    <Card.Title style={styles.titleContainer}title="ONGS-SOS Vida Animal" titleStyle={{
      color:"#ff7700",
      fontSize:28, 
      fontWeight:'bold',
      backgroundColor:"#FFF",
      padding:0,
      margin:0
    }} 
    />
    <Card.Content style={styles.conteudoContainer}>
      <Text style={styles.conteudoCard} variant="bodyMedium">Não abandone aquele que nunca vai abandonar você</Text>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({

  container:{

    padding:20,
    height:"25vh",
    backgroundColor:'#fff',
    opacity:0.8
  },
  titleContainer:{
    margin:0,
    padding:0,
    alignContent:"flex-end",
    alignItems:"flex-end",
    flexWrap:"wrap",
  
  },
  conteudoContainer:{

   
  },
  conteudoCard:{
    color:"#044d0f",
    fontWeight:"bold",
    margin:0,
    padding:0
  }
})

export default CardComponent;