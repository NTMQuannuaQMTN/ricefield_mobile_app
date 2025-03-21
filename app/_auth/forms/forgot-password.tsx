import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";
import { useRouter } from "expo-router";

import RoundIcon from "../../../assets/ricefield-favicon.svg";

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <View style={[styles.views]}>
      <View style={styles.login_title}>
        <RoundIcon width={0.08 * vh} height={0.08 * vh} marginBottom={0.01 * vh} />
        <Text style={{ fontSize: 0.03 * vh, fontFamily: 'Nunito_800ExtraBold', lineHeight: 0.035 * vh }}>Forgot your password?</Text>
        <Text style={{ fontSize: 0.02 * vh, fontFamily: 'Nunito_400Regular', color: '#448D57', lineHeight: 0.025 * vh }}>Don't worry. We got you!</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.input}>
          <Text style={styles.input_title}>College email</Text>
          <View style={[styles.input_form, { width: '100%' }]}>
            <TextInput style={styles.input_text} placeholder="farmer@yourschool.edu"></TextInput>
          </View>
        </View>
        <TouchableOpacity style={[styles.button_login, { backgroundColor: '#448D57', height: 0.06 * vh, marginTop: 0.028 * vh, marginBottom: -0.02 * vh, }]}
          onPress={() => { router.push('./check-inbox') }}>
          <Text style={[styles.button_text, { color: '#FFFFFF' }]}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  views: {
    width: vw,
    height: vh,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#FFFFFF',
  },
  login_title: {
    width: 0.75 * vw,
    height: 0.2 * vh,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: vw,
    height: 'auto',
    marginTop: 0.02 * vh,
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
});
