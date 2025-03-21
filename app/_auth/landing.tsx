import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Animated, Easing, Text, View, Image, TouchableOpacity, Dimensions, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts, Nunito_400Regular, Nunito_800ExtraBold, Nunito_600SemiBold } from '@expo-google-fonts/nunito';
import { router, useRouter } from "expo-router";

import logoIcon from "../../assets/ricefield-favicon.svg";
const testPic = require("../../assets/images/logobox, info-signup.png");

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

export default function LandingPage({ navigation }) {
  const router = useRouter();
  let [fontsLoaded] = useFonts({ Nunito_800ExtraBold, Nunito_600SemiBold, Nunito_400Regular });
  const [key, setKey] = useState(1);
  const [keyText, setKeyText] = useState("Key highlight 1");
  const [descText, setDescText] = useState("Further describe the 1st key highlight in 2 lines");
  const moveAnim = new Animated.Value(vw / 2);
  const moveCur = new Animated.Value(0);
  const moveOthers = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(moveAnim, {
      toValue: -vw * ((key - 2) * (key - 1) - 1) / 2,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [key]);

  function nextKey() {
    if (key < 3) {
      setKey(key + 1);
      setKeyText(`Key highlight ${key + 1}`);
      setDescText(`Further describe the ${key + 1} key highlight in 2 lines`);
    }
  }

  useEffect(() => {
    moveCur.setValue(((key + 1) % 3) * (0.016 + 0.028 / 3) * vh);
    Animated.timing(moveCur, {
      toValue: (key - 1) * (0.016 + 0.028 / 3) * vh,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [key])

  useEffect(() => {
    moveOthers.setValue(0);
    Animated.timing(moveOthers, {
      toValue: -(0.016 + 0.028 / 3) * vh,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [key])

  if (!fontsLoaded) return <View></View>;

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor='#FFFFFF' barStyle='default' />
      <SafeAreaView style={styles.container}>
        <Image source={testPic} style={styles.image} />
        <Text style={styles.key_highlight}>{keyText}</Text>
        <Text style={styles.desc_highlight}>{descText}</Text>
        <View style={styles.status_cont}>
          <Animated.View style={[styles.status_ele, { right: 3 * (0.016 + 0.028 / 3) * vh - 1, backgroundColor: '#448D57', transform: [{ translateX: moveCur }] }]}></Animated.View>
          <Animated.View style={[styles.status_ele, { right: (key > 2) ? 3 * (0.016 + 0.028 / 3) * vh - 1 : 2 * (0.016 + 0.028 / 3) * vh - 1, backgroundColor: '#FFFFFF', transform: [{ translateX: (key != 2) ? 0 : moveOthers }] }]}></Animated.View>
          <Animated.View style={[styles.status_ele, { right: 1 * (0.016 + 0.028 / 3) * vh - 1, backgroundColor: '#FFFFFF', transform: [{ translateX: (key < 3) ? 0 : moveOthers }] }]}></Animated.View>
        </View>
        <Animated.View id="buttons" style={{
          width: 2 * vw,
          height: 0.08 * vh,
          flexDirection: 'row',
          transform: [{ translateX: moveAnim, }]
        }}>
          <View style={styles.button_view}>
            <TouchableOpacity style={[styles.button, { borderColor: '#448D57', borderWidth: 2 }]}
              onPress={() => { router.push('/_auth/forms/login') }}>
              <Text style={[styles.button_text, { color: '#448D57' }]}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#448D57' }]} onPress={nextKey}>
              <Text style={[styles.button_text, { color: '#FFFFFF' }]}>Next</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_view}>
            <TouchableOpacity style={[styles.button_login, { backgroundColor: '#448D57' }]}
              onPress={() => { router.push('/_auth/forms/login') }}>
              <Text style={[styles.button_text, { color: '#FFFFFF' }]}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, width: vw, height: vh, justifyContent: 'center', alignItems: "center", backgroundColor: '#FFFFFF' },
  image: { width: 0.8 * vw, height: 0.6 * vh, objectFit: 'cover' },
  key_highlight: {
    fontSize: 0.028 * vh,
    lineHeight: 0.03 * vh,
    marginTop: 0.008 * vh,
    height: 0.03 * vh,
    width: 2 / 3 * vw,
    textAlign: 'center',
    fontFamily: 'Nunito_800ExtraBold',
  },
  desc_highlight: {
    fontSize: 0.02 * vh,
    lineHeight: 0.022 * vh,
    height: 0.044 * vh,
    width: 2 / 3 * vw,
    textAlign: 'center',
    marginBottom: 0.02 * vh,
    fontFamily: 'Nunito_400Regular',
  },
  button_view: {
    width: vw,
    height: 0.08 * vh,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 0.02 * vw,
  },
  button: {
    width: 0.2 * vh,
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
  status_cont: {
    width: 0.108 * vh,
    height: 0.028 * vh,
    borderRadius: 0.06 * vh,
    backgroundColor: '#CFD7D2',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 0.016 * vh,
    marginBottom: 0.02 * vh,
  },
  status_ele: {
    position: 'absolute',
    width: 0.028 / 3 * vh,
    height: 0.028 / 3 * vh,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
  },
  button_login: {
    width: 0.02 * vw + 0.4 * vh,
    height: 0.2 / 3 * vh,
    borderRadius: 0.2 * vw,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0.005 * vh,
  }
});
