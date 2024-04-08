import React from "react";
import { Button, Image, StyleSheet, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  item: {
    marginTop: 20,
    padding: 30,
    backgroundColor: '#E5FFDE',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin:"auto",
    borderRadius: 15
  },
  titleContainer: {
    padding:20,
    backgroundColor:'#66B7A6',
    borderRadius: 10
  },
  title: {
    color: '#000',
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  text: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center"
  },
  img: {
    borderRadius: 10,
    width: 300, 
    height: 300,
  }
});

const Title = () => {
  return (
    <View style={styles.titleContainer} >
      <Text style={styles.title}>La granja d'en Pepitu</Text>
    </View>
  );
};

const ANIMALS = [
  { name: 'Gallina', img: require('./assets/gallina.jpeg'), sound: require('./assets/gallina.mp3'), key: '1' },
  { name: 'Gat', img: require('./assets/gat.jpeg'), sound: require('./assets/gat.mp3'), key: '2' },
  { name: 'Gos', img: require('./assets/gos.jpeg'), sound: require('./assets/gos.mp3'), key: '3' },
  { name: 'Cavall', img: require('./assets/cavall.jpeg'), sound: require('./assets/cavall.mp3'), key: '4' },
  { name: 'Oca', img: require('./assets/oca.jpeg'), sound: require('./assets/oca.mp3'), key: '5' },
  { name: 'Gall', img: require('./assets/gall.jpeg'), sound: require('./assets/gall.mp3'), key: '6' },
  { name: 'Bou', img: require('./assets/bou.jpeg'), sound: require('./assets/bou.mp3'), key: '7' },
  { name: 'Vaca', img: require('./assets/vaca.jpg'), sound: require('./assets/vaca.mp3'), key: '8' },
  { name: 'Cabra', img: require('./assets/cabra.jpg'), sound: require('./assets/cabra.mp3'), key: '9' },
  { name: 'Be', img: require('./assets/be.jpg'), sound: require('./assets/be.mp3'), key: '10' },
];

const App = () => {
  const playSound = async (soundUri) => {
    try {
      const { sound } = await Audio.Sound.createAsync(soundUri);
      await sound.playAsync();
    } catch (error) {
      console.log('Error playing sound', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Title/>
      {ANIMALS.map((animal) => (
        <TouchableOpacity onPress={() => playSound(animal.sound)} style={styles.item} key={animal.key}>
          <Image source={animal.img} style={styles.img}/>
          <Text style={styles.text}>{animal.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default App;