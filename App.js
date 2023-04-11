import { Component } from "react";
import { View, Text, Image, StyleSheet,  TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
const handlePress = () => {}


function Card(props) {
  return(
    <View style={styles.card}>
        <Image style={{ resizeMode:'stretch', width: '100%', height:100, flex:2,  }} source={{uri:props.games.capa}} />
        <Text style={{color: 'white', fontSize:18, textAlign:'center'  }}  > {props.games.titulo}</Text>
        <Text style={{color:'white', fontSize:20, textAlign:'center' }} > R$ {props.games.preco} </Text>
        <TouchableOpacity
        style={styles.button}
        onPress={props.onDelete}>
        <Icon name="trash" size={29} color="red" />
      </TouchableOpacity>
    </View>   
    )
}

export default class App extends Component{
    state ={

        games :[
            {
                capa: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1888930/header.jpg?t=1680032961',
          titulo: 'The Last Of Us',
          preco: '150,00'
        },
        {
            capa: 'https://quintacapa.com.br/wp-content/uploads/2020/06/tlou2.jpg',
            titulo: 'The Last Of Us Part II',
            preco: '300,90'
        },
        {
            capa: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1671485009',
            titulo: 'Red Dead Rendemption II',
            preco: '300,50'
        },
        {
            capa: 'https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg?t=1667006028',
            titulo: 'Hollow Knight',
          preco: '46,99'
        },
        
        {
            capa: 'https://cdn.cloudflare.steamstatic.com/steam/apps/359550/header.jpg?t=1680010421',
            titulo: 'Rainbow Six Siege',
            preco: '40,00'
        },
        {
        capa: 'https://cdn.cloudflare.steamstatic.com/steam/apps/269210/header.jpg?t=1669637809',
        titulo: 'Hero siege',
        preco: '19,00'
    },
    
]
}
deletar(pos) {
    const games = [...this.state.games]
    games.splice(pos, 1)
    this.setState({ games } )    
  }

render(){

    return (
        <ScrollView>

        <View style={styles.container}>
    <Text style={{ fontSize: 40, fontWeight: 'bold', color:'white', margin:10, }} >TOP GAMES</Text>
    <View style={styles.conteudo}>
    {this.state.games.map((games, index) => (
            <Card key={index} games={games} onDelete={() => this.deletar(index)}/>          
            ))}
      </View>
    </View>
        </ScrollView>
  );
}
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop:20,
      marginTop: 40,
      padding: 20,
      backgroundColor: 'black',
    },
    conteudo:{
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: 'white',

      alignItems:'center',
      justifyContent: "center",
      width:'100%',
      
    },
    card:{
      width:'90%',
      height:400,
      backgroundColor:'gray',
      borderRadius:10,
      margin:10
    },
    livro:{
      fontSize:18,
      textAlign: 'center',
    }
    
  
   
    
    

  });
