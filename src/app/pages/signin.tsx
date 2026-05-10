import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {Fontisto} from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function SignIn() {
  const router = useRouter();
  const [selected, setSelected] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (

    <SafeAreaView style={styles.container}>
      
      <Image
      style={styles.logo}
      source={require("@/assets/images/leaf.png")}
      />

      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>
        Let’s experience the joy of telecare AI.
      </Text>

      <Text style={styles.label}>Email Address</Text>
      <View style={[styles.inputContainer, selected === "email" && styles.inputFocused]}>
        <Ionicons name="mail-outline" size={20} color="#888" />
        <TextInput
          placeholder="Enter your Email Address"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          onFocus={() => setSelected("email")}
          onBlur={() => setSelected("")}
        />
      </View>

      <Text style={styles.label}>Password</Text>
      <View style={[styles.inputContainer, selected === "password" && styles.inputFocused]}>
        <Fontisto name="locked" size={20} color="#888" />
        <TextInput
          placeholder="Enter your Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          onFocus={() => setSelected("password")}
          onBlur={() => setSelected("")}
        />
        <Pressable onPress={() => setShowPassword(!showPassword)}>
        <Ionicons name={showPassword ? 'eye-outline' : 'eye-off-outline'} size={20} color="#888" />
        </Pressable>
      </View>

      

      <Pressable
        style={styles.button}
        onPress={() => alert("Sign In Button Pressed \nWorking on It. Please Wait!")}
      >
        <View style={styles.buttonContent}>

        <Text style={styles.buttonText}>Sign In 
        </Text>
          <Ionicons name="arrow-forward-sharp" size={20} color="#fff" />
        </View>
      </Pressable>

      <View style={styles.socialContainer}>

  <Pressable style={styles.socialBtn} 
  onPress={() => alert("Facebook Button Pressed \n Working on It. Please Wait!")}
  >
    <Ionicons name="logo-facebook" size={25} color="black" />
  </Pressable>

  
  <Pressable style={styles.socialBtn} 
  onPress={() => alert("Google Button Pressed \nWorking on It. Please Wait!")}
  >
    <Ionicons name="logo-google" size={25} color="black" />
  </Pressable>

  
  <Pressable style={styles.socialBtn} 
  onPress={() => alert("Instagram Button Pressed \nWorking on It. Please Wait!")}
  >
    <Ionicons name="logo-instagram" size={25} color="black" />
  </Pressable>

</View>

      <Text style={styles.footer}>
        Don’t have an account?{' '}
        <Link
        href="/pages/signup"
          style={styles.link}
        >
          Sign Up
        </Link>
        
      </Text>
      <Link
        style={styles.forgot}
        href="/pages/forgot-password"
      >
        Forgot your password?
      </Link>
      
    </SafeAreaView>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
    paddingHorizontal:25,
    paddingTop:120
  },

  logo: {
    width: 80,
    height: 80,
    backgroundColor: "transparent",
    alignSelf: 'center',
    marginBottom: 12,
  },

  title: {
    fontSize: 45,
    fontWeight: '700',
    textAlign: 'center',
  },

  subtitle: {
    textAlign: 'center',
    color: '#777',
    marginTop: 10,
    marginBottom: 30,
    fontSize:18,
  },

  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
    marginTop: 10,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 19,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    marginBottom: 15,
  },

  inputFocused: {
    borderWidth: 2,
    borderColor: '#7ED321',
  },

  input: {
    flex: 1,
    paddingVertical: 15,
    marginLeft: 10,

  },

  forgot: {
    textAlign: 'center',
    color: '#7ED321',
    marginTop: 10,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },

  button: {
    backgroundColor: '#7ED321',
    paddingVertical: 18,
    borderRadius: 19,
    marginTop:10,
  },
  buttonContent: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
},

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  footer: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },

  link: {
    color: '#7ED321',
    fontWeight: '600',
  },

  dividerContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginVertical: 25,
},

line: {
  flex: 1,
  height: 1,
  backgroundColor: '#E5E5E5',
},

dividerText: {
  marginHorizontal: 10,
  color: '#888',
  fontSize: 12,
},

socialContainer: {
  marginTop:30,
  flexDirection: 'row',
  justifyContent: 'center',
  gap: 15,
},

socialBtn: {
  width: 50,
  height: 50,
  borderRadius: 17,
  borderWidth: 2,
  borderColor: '#00000047',
  alignItems: 'center',
  justifyContent: 'center',
},
});