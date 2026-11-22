import * as React from 'react';
import { Button } from 'react-native-paper';

const ButtonComponent = (props) => (
  <Button 
    icon={props.icon} 
    mode="contained"
    textColor='#ffd900'
    buttonColor="transparent"
    contentStyle={{width:300, height:50, flexDirection:'row-reverse'}}
    style={{justifyContent:'flex-start', marginTop:10,}}
    labelStyle={{ padding:5}}
    onPress={() => console.log(props.largura)}>
    {props.text}
  </Button>
);

export default ButtonComponent;