import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";
import { useRouter } from "expo-router";

import HotRice from "../../../assets/icon (hot rice).svg";

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

export default function ResetPassword() {
    const router = useRouter();

    return (
        <View style={[styles.views,]}>
            <View style={styles.login_title}>
                <TouchableOpacity onPress={() => { router.push('./reset-password') }}>
                    <HotRice width={0.08 * vh} height={0.08 * vh} marginBottom={0.01 * vh} />
                </TouchableOpacity>
                <Text style={{ fontSize: 0.03 * vh, fontFamily: 'Nunito_800ExtraBold', lineHeight: 0.035 * vh }}>Check your inbox!</Text>
                <Text style={{ fontSize: 0.02 * vh, textAlign: 'center', fontFamily: 'Nunito_400Regular', color: '#448D57', lineHeight: 0.025 * vh }}>We have just sent you an verification link to your email. Verify to continue.</Text>
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