import { Pressable, StatusBar, StyleSheet, Text, View,Image } from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import {Link} from 'expo-router';

export default function Index() {
  return (
    <SafeAreaView style = {styles.screen}>
      <StatusBar 
      barStyle='dark-content'
      />
      <View style={styles.container}>
        <Image
        source = {require("../../assets/images/icon (2).png")}
        style={styles.favicon}
        />
      <View style={styles.heading}>
        <Text style={styles.title}>Chai Aur Code</Text>
        
      </View>
      <Text style={styles.subtitle}>Mobile Development Cohort</Text>
      <Text style={styles.subtitle}>Assignment 01</Text>
      <Image
      source={{uri:"https://chaicode.com/assets/mobile-dev-dark-Ctgs9R2R.webp"}}
      style={styles.image}
      />

      

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          
        <Link href="/pages/signin">
        Sign In
      </Link>
        </Text>

        
        
      </Pressable>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          
        <Link href="/pages/signup">
        Sign Up
      </Link>
        </Text>
        
      </Pressable>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          
        <Link href="/pages/forgot-password">
        Forgot Password
      </Link>
        </Text>
        
      </Pressable>

      
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen :{
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  heading:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  favicon :{
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
    
  },
  image: {
    width: 350,
    height: 250,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 35,
    fontWeight: '700',
    paddingVertical: 3,
  },
  subtitle: {
    marginTop: 8,
    color: '#777',
    fontSize: 20,
    paddingVertical: 3,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#7ED321',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 17,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
