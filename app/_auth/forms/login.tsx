import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Dimensions, Image } from "react-native";
import { useRouter } from "expo-router";

import RoundIcon from "../../../assets/ricefield-favicon.svg";
import HidePass from "../../../assets/icons/hide password - icon.svg";
import ShowPass from "../../../assets/icons/show password - icon.svg";

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [passShown, setPassShown] = useState(false);

  return (
    <View style={[styles.views]}>
      <View style={styles.login_title}>
        <RoundIcon width={0.08 * vh} height={0.08 * vh} marginBottom={0.01 * vh}/>
        <Text style={{ fontSize: 0.03 * vh, fontFamily: 'Nunito_800ExtraBold', lineHeight: 0.035 * vh }}>It's time to cook!</Text>
        <Text style={{ fontSize: 0.02 * vh, textAlign: 'center', fontFamily: 'Nunito_400Regular', color: '#448D57', lineHeight: 0.025 * vh }}>Log in with your credentials</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.input}>
          <Text style={styles.input_title}>College email</Text>
          <View style={[styles.input_form, { width: '100%' }]}>
            <TextInput value={email} onChangeText={(newMail) => setEmail(newMail)} style={styles.input_text}></TextInput>
          </View>
        </View>
        <View style={styles.input}>
          <Text style={styles.input_title}>Password</Text>
          <View style={[styles.input_form, { paddingRight: 5 }]}>
            <TextInput value={passShown ? password : '•'.repeat(password.length)} onChangeText={(newPass) => {
              setPassword(newPass);
              if (password.length < newPass.length) {
                setPassword(password + newPass.substring(password.length));
              } else {
                setPassword(password.substring(0, newPass.length));
              }
              }} style={[styles.input_text, { width: 0.9 * vw - 0.05 * vh - 25, }]}></TextInput>
            <TouchableOpacity style={[styles.input_form, { width: 0.05 * vh, height: 0.05 * vh, padding: 0, justifyContent: 'center' }]} onPress={() => { setPassShown(!passShown) }}>
              {!passShown && (<HidePass width={0.024 * vh} height={0.024 * vh}/>)}
              {passShown && (<ShowPass width={0.024 * vh} height={0.024 * vh}/>)}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.remember}>
          <TouchableOpacity style={styles.check} onPress={() => { setIsChecked(!isChecked) }}>
            <TouchableOpacity style={[styles.checkbox, (isChecked) ? { backgroundColor: '#448D57' } : { backgroundColor: '#FFFFFF' }]} onPress={() => { setIsChecked(!isChecked) }}></TouchableOpacity>
            <Text style={[styles.input_title, { fontSize: 0.015 * vh, lineHeight: 0.018 * vh, }]}>Remember me</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.green_text_btn}>
            <Text style={[styles.input_title, { fontSize: 0.015 * vh, lineHeight: 0.018 * vh, color: '#448D57', }]}
              onPress={() => { router.push('./forgot-password') }}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.button_login, { backgroundColor: '#448D57', height: 0.06 * vh, marginTop: 0.04 * vh }]}
          onPress={() => {  }}>
          <Text style={[styles.button_text, { color: '#FFFFFF' }]}>Log In</Text>
        </TouchableOpacity>
        <View style={{
          height: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          width: vw,
          gap: 5,
          marginTop: -4,
        }}>
          <Text style={{
            fontFamily: 'Nunito_600SemiBold',
            fontSize: 0.016 * vh,
            lineHeight: 0.03 * vh,
          }}>First time in the field?</Text>
          <TouchableOpacity onPress={() => { router.push('./signup') }}>
            <Text style={{
              fontFamily: 'Nunito_600SemiBold',
              fontSize: 0.016 * vh,
              lineHeight: 0.03 * vh,
              color: '#448D57',
            }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  login_title: {
    width: 0.75 * vw,
    height: 0.2 * vh,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: vw,
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    width: 0.9 * vw,
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 10,
  },
  input_title: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 0.018 * vh,
    lineHeight: 0.022 * vh,
  },
  input_form: {
    height: 0.05 * vh,
    backgroundColor: '#F6F8F9',
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input_text: {
    height: '100%',
    width: '100%',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 0.018 * vh,
    letterSpacing: -0.4,
  },
  remember: {
    width: 0.9 * vw,
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  check: {
    width: 'auto',
    height: 0.018 * vh,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  checkbox: {
    marginRight: 5,
    width: 0.018 * vh,
    height: 0.018 * vh,
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 3,
    marginTop: -2,
  },
  green_text_btn: {
    width: 'auto',
    height: '100%',
    backgroundColor: 'transparent',
  },
  linkText: { color: "#448D57", marginTop: 10 },
  button_login: {
    width: 0.02 * vw + 0.4 * vh,
    height: 0.2 / 3 * vh,
    borderRadius: 0.2 * vw,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0.005 * vh,
  },
  button_text: {
    fontSize: 0.022 * vh,
    lineHeight: 0.025 * vh,
    fontFamily: 'Nunito_800ExtraBold',
  },
  views: {
    width: vw,
    height: vh,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#FFFFFF',
  },
});