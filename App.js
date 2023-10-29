import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Amplify } from 'aws-amplify';
import awsExports from './src/aws-exports';
import Home from './src/screens/Home-Screen';
import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react-native';
import MyAppHeader from './src/layout/MyAppHeader';
import MyAppFooter from './src/layout/MyAppFooter';

Amplify.configure(awsExports);


const formFields = {
    signIn: {
        username: {
            labelHidden: false,
            placeholder: 'Enter your username here',
            isRequired: true,
            label: 'Username:'
        },
    },
    signUp: {
        email: {
            order: 3
        },
        password: {
            order: 1
        },
        confirm_password: {
            order: 2
        },
    }
}



export default function App() {
    return (
        <Authenticator.Provider>
            <Authenticator
                Header={MyAppHeader}
                Footer={MyAppFooter}
                formFields={formFields} >
                <View style={styles.container}>
                    <Home />
                    <StatusBar style="auto" />
                </View>
            </Authenticator>
        </Authenticator.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
