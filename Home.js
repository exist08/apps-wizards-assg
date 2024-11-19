import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={require('./assets/welcome-image.png')} style={{resizeMode: 'contain', width: '90%'}} />
            <Text style={{color:'#1F41BB', fontSize: 35, fontWeight: 500,textAlign: 'center'}}>Discover Your Dream Job here</Text>
            <Text style={{textAlign: 'center', marginTop: 30,marginBottom:30}}>Explore all the existing job roles based on your interest and study major</Text>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.activeBtn} onPress={()=>navigation.navigate('Login')}>
                    <Text style={{color: 'white', ...styles.btnText}}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.inactiveBtn} onPress={()=>navigation.navigate('CreateAccount')}>
                    <Text style={{...styles.btnText}}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 35,
    },
    activeBtn: {
        backgroundColor: '#1F41BB',
        color: 'white',
        fontSize: 20,
        borderRadius: 10,
        elevation: 5,
    },
    inactiveBtn: {
        backgroundColor: 'white',
        color: '#0a0a0a',
        fontSize: 20,
        borderRadius: 20,
        overflow: 'hidden',
    },
    btnContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        width: '100%',
        height: 50,
    },
    btnText:{
        fontSize: 20,
        padding: 10,
        paddingRight: 40,
        paddingLeft: 40,
        fontWeight: 500,
    }
});
