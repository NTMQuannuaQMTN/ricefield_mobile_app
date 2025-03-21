import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";
import { useRouter } from "expo-router";

import RoundIcon from "../../../assets/ricefield-favicon.svg";
import HidePass from "../../../assets/icons/hide password - icon.svg";
import ShowPass from "../../../assets/icons/show password - icon.svg";
import Wrong from "../../../assets/icons/wrong.svg";

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

export default function Signup() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passShown, setPassShown] = useState(false);
    const [passConf, setPassConf] = useState("");
    var signupCheck = [true, true, true, true];
    var passCheck = [true, true, true, true];

    return (
        <View style={styles.views}>
            <View style={styles.login_title}>
                <RoundIcon width={0.08 * vh} height={0.08 * vh} marginBottom={0.01 * vh} />
                <Text style={{ fontSize: 0.03 * vh, fontFamily: 'Nunito_800ExtraBold', lineHeight: 0.035 * vh }}>Howdy, Friend</Text>
                <Text style={{ fontSize: 0.02 * vh, textAlign: 'center', fontFamily: 'Nunito_400Regular', color: '#448D57', lineHeight: 0.025 * vh }}>Create your farmer's identity</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.input}>
                    <Text style={styles.input_title}>Username</Text>
                    <View style={[styles.input_form, { width: '100%' }]}>
                        <TextInput style={styles.input_text} placeholder="coolfarmer"></TextInput>
                    </View>
                    <Text style={styles.input_title}>Username</Text>
                </View>
                <View style={styles.input}>
                    <Text style={styles.input_title}>College email</Text>
                    <View style={[styles.input_form, { width: '100%' }]}>
                        <TextInput style={styles.input_text} placeholder="farmer@yourschool.edu"></TextInput>
                    </View>
                    <Text style={styles.input_title}>College email</Text>
                </View>
                <View style={styles.input}>
                    <Text style={styles.input_title}>Password</Text>
                    <View style={[styles.input_form, { paddingRight: 5 }]}>
                        <TextInput value={password} secureTextEntry={!passShown} onChangeText={(s) => {
                            setPassword(s);

                        }} style={[styles.input_text, { width: 0.9 * vw - 0.05 * vh - 25, }]}></TextInput>
                        <TouchableOpacity style={[styles.input_form, { width: 0.05 * vh, height: 0.05 * vh, padding: 0, justifyContent: 'center' }]} onPress={() => { setPassShown(!passShown) }}>
                            {!passShown && (<HidePass width={0.024 * vh} height={0.024 * vh} />)}
                            {passShown && (<ShowPass width={0.024 * vh} height={0.024 * vh} />)}
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    width: 0.9 * vw,
                    height: 'auto',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignContent: 'center',
                    flexWrap: 'wrap',
                    gap: 10,
                }}>
                    <View style={styles.pass_check}>
                        {passCheck[0] ? <Text>ok</Text> : <Wrong></Wrong>}
                        <Text style={styles.input_title}>At least 8 characters</Text>
                    </View>
                    <View style={styles.pass_check}>
                        <Text>{passCheck[1] ? <Text>ok</Text> : <Wrong></Wrong>}</Text>
                        <Text style={styles.input_title}>Has special character</Text>
                    </View>
                    <View style={styles.pass_check}>
                        <Text>{passCheck[2] ? <Text>ok</Text> : <Wrong></Wrong>}</Text>
                        <Text style={styles.input_title}>Has a number</Text>
                    </View>
                    <View style={styles.pass_check}>
                        <Text>{passCheck[3] ? <Text>ok</Text> : <Wrong></Wrong>}</Text>
                        <Text style={styles.input_title}>Has a capital letter</Text>
                    </View>
                </View>
                <View style={styles.input}>
                    <Text style={styles.input_title}>Retype Password</Text>
                    <View style={[styles.input_form, { width: '100%' }]}>
                        <TextInput value={passConf} onChangeText={(s) => {setPassConf(s)}} secureTextEntry={true} style={styles.input_text}></TextInput>
                    </View>
                    <Text style={styles.input_title}>Password</Text>
                </View>
                <TouchableOpacity style={[styles.button_login, { backgroundColor: '#448D57', height: 0.06 * vh, marginTop: 0.02 * vh }]}
                    onPress={() => { }}>
                    <Text style={[styles.button_text, { color: '#FFFFFF' }]}>Create Account</Text>
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
                    }}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => { router.push('./login') }}>
                        <Text style={{
                            fontFamily: 'Nunito_600SemiBold',
                            fontSize: 0.016 * vh,
                            lineHeight: 0.03 * vh,
                            color: '#448D57',
                        }}>Log in</Text>
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
    pass_check: {
        width: (0.9 * vw - 10) / 2,
        height: 'auto',
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
});
