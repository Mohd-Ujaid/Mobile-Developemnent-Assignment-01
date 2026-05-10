import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Ionicons} from '@expo/vector-icons';
import {Fontisto} from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function SignUpScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selected, setSelected] = useState("");

  const Error = ()=> {
    return(
      <View style={styles.error}>
        <Ionicons name="warning" size={20} color="red" />
        <Text style={styles.errorText}>Error: Passwords do not match!</Text>
      </View>
    )
  }

    const handleSubmit = () => {
    if (password === confirmPassword) {
      setError(false);
      alert("Sign Up Button Pressed \nWorking on It. Please Wait!");
    } else {
      setError(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <Image
            style={styles.logo}
            source={require("@/assets/images/leaf.png")}
            />

      <Text style={styles.title}>Sign Up for Free</Text>

      <Text style={styles.subtitle}>
        Sign up in 1 minute for free!
      </Text>

      <Text style={styles.label}>Email Address</Text>

      <View style={[styles.inputContainer, selected === "email" && styles.inputFocused]}>
        <Ionicons name="mail-outline" size={20} color="#888" />

        <TextInput
          placeholder="Enter your Email Address"
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
          value={password}
          onChangeText={setPassword}
          style={styles.input} 
          secureTextEntry={!showPassword}
          onFocus={() => setSelected("password")}
          onBlur={() => setSelected("")}
        />
        <Pressable onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? 'eye-outline' : 'eye-off-outline'}
            size={20}
            color="#888"
          />
        </Pressable>
      </View>

      <Text style={styles.label}>Password Confirmation</Text>

      <View style={[styles.inputContainer, selected === "cPassword" && styles.inputFocused]}>
        <Fontisto name="locked" size={20} color="#888" />

        <TextInput
          placeholder="Enter your Password"
          secureTextEntry={!showPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.input}
          onFocus={() => setSelected("cPassword")}
          onBlur={() => setSelected("")}
        />

        <Pressable onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? 'eye-outline' : 'eye-off-outline'}
            size={20}
            color="#888"
          />
        </Pressable>
      </View>

      {error && <Error />}

      <Pressable style={styles.button}
      onPress={handleSubmit}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Sign Up</Text>

          <Ionicons
            name="arrow-forward-sharp"
            size={20}
            color="#fff"
          />
        </View>
      </Pressable>

      <Text style={styles.footer}>
        Already have an account?{' '}
        <Link href="/pages/signin" style={styles.link}>Sign In</Link>
        
      </Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
    paddingHorizontal: 25,
    paddingTop: 70,
  },

  logo: {
    width: 80,
    height: 80,
    backgroundColor: "transparent",
    alignSelf: 'center',
    marginBottom: 12,
  },

  title: {
    fontSize: 43,
    fontWeight: '700',
    textAlign: 'center',
  },

  subtitle: {
    textAlign: 'center',
    color: '#777',
    marginTop: 12,
    marginBottom: 30,
    fontSize:18,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 10,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 19,
    paddingHorizontal: 12,
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
  error: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 12,
    backgroundColor: '#FF4C4C30',
    borderRadius: 19,
    borderColor:'#FF4C4C',
    borderWidth: 1,
    padding: 10,
  },
  errorText: {
    fontSize: 15,
    fontWeight: '400',
    padding: 5,
    
  },  

  button: {
    backgroundColor: '#7ED321',
    paddingVertical: 18,
    borderRadius: 19,
    marginTop: 20,
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

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#DDD',
  },

  dividerText: {
    marginHorizontal: 10,
    color: '#888',
    fontSize: 12,
  },

  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },

  socialBtn: {
    width: 55,
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },

  footer: {
    textAlign: 'center',
    marginTop: 30,
    color: '#666',
  },

  link: {
    color: '#7ED321',
    fontWeight: '700',
  },
});