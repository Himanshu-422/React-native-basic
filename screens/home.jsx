
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Styles from '../styles/Styles';
import Title from "../components/title";

const Home = ({navigation}) => {
  return (
    <View style={[Styles.container]}>
      <Title style={styles.title} />
      <View style={styles.imgContainer}>
        <Image source={require("../images/Project_186-02_generated.jpg")}
         style={styles.img}
         resizeMode='contain'/>
      </View>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Quiz")}>
        <Text style={styles.startBtn}>Start Game</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  title:{
    marginTop: 30,
  },
  imgContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  img:{
    width: 400,
    height: 400,
  },
  startBtn: {
    backgroundColor: "#fca311",
    color: '#000000',
    marginBottom: 50,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    borderRadius: 25,
    marginHorizontal: 20,
  }
})