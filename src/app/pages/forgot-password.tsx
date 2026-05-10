import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';
import {Link} from 'expo-router';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Ionicons} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import {Fontisto} from '@expo/vector-icons';

export default function ForgotPasswordScreen() {
  const [selected, setSelected] = useState('');

  return (
    <SafeAreaView style={styles.container}>

      <Pressable style={styles.backBtn}>
        <Link href="/pages/signin">
        <Ionicons
          name="chevron-back"
          size={24}
          color="#222"
        />
        </Link>
      </Pressable>

      <Text style={styles.title}>Forgot Password</Text>

      <Text style={styles.subtitle}>
        Select which methods you'd like to reset.
      </Text>

      <Pressable
        style={[
          styles.optionCard,
          selected === 'email' && styles.activeCard,
        ]}
        onPress={() => setSelected('email')}
      >
        <View
          style={[
            styles.iconBox,
            selected === 'email' && styles.activeIconBox,
          ]}
        >
          <Ionicons
            name="mail"
            size={20}
            color={selected === 'email' ? '#7ED321' : '#777'}
          />
        </View>

        <View>
          <Text style={styles.optionTitle}>
            Email Address
          </Text>

          <Text style={styles.optionSubtitle}>
            Send via email address securely.
          </Text>
        </View>
      </Pressable>

      
      <Pressable
        style={[
          styles.optionCard,
          selected === '2fa' && styles.activeCard,
        ]}
        onPress={() => setSelected('2fa')}
      >
        <View
          style={[
            styles.iconBox,
            selected === '2fa' && styles.activeIconBox,
          ]}
        >
          <MaterialIcons
            name="phonelink-lock"
            size={20}
            color={selected === '2fa' ? '#7ED321' : '#777'}
          />
        </View>

        <View>
          <Text style={styles.optionTitle}>
            2 Factor Authentication
          </Text>

          <Text style={styles.optionSubtitle}>
            Send via 2FA securely.
          </Text>
        </View>
      </Pressable>

      
      <Pressable
        style={[
          styles.optionCard,
          selected === 'google' && styles.activeCard,
        ]}
        onPress={() => setSelected('google')}
      >
        <View
          style={[
            styles.iconBox,
            selected === 'google' && styles.activeIconBox,
          ]}
        >
          <Fontisto
            name="locked"
            size={20}
            color={selected === 'google' ? '#7ED321' : '#777'}
          />
        </View>

        <View>
          <Text style={styles.optionTitle}>
            Google Authenticator
          </Text>

          <Text style={styles.optionSubtitle}>
            Send via authenticator securely.
          </Text>
        </View>
      </Pressable>

      <Pressable style={styles.button}
      onPress={() => {
        alert("Button Pressed\nWorking on It. Please Wait!")
      setSelected("")
      }}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>
            Reset Password
          </Text>

          <Ionicons
            name="arrow-forward"
            size={20}
            color="#fff"
          />
        </View>
      </Pressable>

      <Fontisto
        name="locked"
        size={140}
        color="#EFEFEF"
        style={styles.bigLock}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
    paddingHorizontal: 25,
    paddingTop: 40,
  },

  backBtn: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#EFEFEF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },

  title: {
    fontSize: 39,
    fontWeight: '700',
    color: '#222',
  },

  subtitle: {
    color: '#888',
    marginTop: 15,
    marginBottom: 35,
    fontSize: 17,
  },

  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 14,
    marginBottom: 18,
    borderWidth: 2,
    borderColor: 'transparent',
  },

  activeCard: {
    borderColor: '#A6E22E',
  },

  iconBox: {
    width: 55,
    height: 55,
    borderRadius: 18,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  

  activeIconBox: {
    backgroundColor: '#EAF8D5',
  },

  optionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },

  optionSubtitle: {
    color: '#888',
    marginTop: 4,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#8BE000',
    paddingVertical: 18,
    borderRadius: 19,
    marginTop: 20,
  },

  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

  bigLock: {
    position: 'absolute',
    bottom: -36,
    left: 10,
  },
});