import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigator = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={{ color: '#1F41BB', fontSize: 35, fontWeight: 700, textAlign: 'center', marginBottom: 30 }}>Login here</Text>
            <Text style={{ fontWeight: 500, fontSize: 20, width: '60%', textAlign: 'center', marginBottom: 50 }}>Welcome back you’ve
                been missed!</Text>
            <View style={styles.formContainer}>
                <TextInput
                    style={[
                        styles.inputStyle,
                        { borderColor: isEmailFocused ? '#1F41BB' : '#ccc' } // Change color dynamically
                    ]}
                    onFocus={() => setIsEmailFocused(true)} // Handle focus
                    onBlur={() => setIsEmailFocused(false)} // Handle blur
                    placeholder="Email"
                    onChangeText={setEmail}
                    value={email}
                />
                <TextInput
                    style={[
                        styles.inputStyle,
                        { borderColor: isPasswordFocused ? '#1F41BB' : '#ccc' } // Change color dynamically
                    ]}
                    onFocus={() => setIsPasswordFocused(true)} // Handle focus
                    onBlur={() => setIsPasswordFocused(false)} // Handle blur
                    placeholder="Password"
                    secureTextEntry // Hide input text
                    onChangeText={setPassword}
                    value={password}
                />
                <Text style={{ color: '#1F41BB', fontSize: 14, marginTop: 20, marginBottom: 20, fontWeight: 500, textAlign: 'right' }}>Forgot your password?</Text>
                <TouchableOpacity style={styles.activeBtn}>
                    <Text style={{ color: 'white', ...styles.btnText }}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigator.navigate('CreateAccount')}>
                    <Text style={{ textAlign: 'center', fontWeight: 500, }}>Create new account</Text>
                </TouchableOpacity>
            </View>
            <Text style={{
                fontSize: 14,
                marginTop: 50,
                color: '#1F41BB',
                fontWeight: 500,
            }}>Or continue with</Text>
            <View style={styles.socials}>
                <TouchableOpacity>
                    <Image source={require('../assets/icons/google.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/icons/facebook.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/icons/apple.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeBtn: {
        backgroundColor: '#1F41BB',
        color: 'white',
        fontSize: 20,
        elevation: 5,
        borderRadius: 10,
        marginBottom: 30,
    },
    inactiveBtn: {
        backgroundColor: 'white',
        color: '#0a0a0a',
        fontSize: 20,
        borderRadius: 20,
        overflow: 'hidden',
    },
    btnText: {
        fontSize: 20,
        padding: 10,
        paddingRight: 20,
        paddingLeft: 20,
        textAlign: 'center',
        fontWeight: 500,
    },
    formContainer: {
        width: '90%',
        marginBottom: 20,
    },
    socials: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        gap: 10,
    },
    inputStyle: { height: 50, borderRadius: 10, borderColor: 'purple', borderWidth: 1, padding: 15, marginTop: 20, backgroundColor: '#F1F4FF' }
});

export default Login