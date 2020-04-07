import React, {useState} from 'react'
import { StyleSheet, KeyboardAvoidingView, Keyboard, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { Button, Block, Text, Input } from '../components';
import { theme } from '../constants';

const Login = () => {
  const VALID_EMAIL = 'contact@react-ui-kit.com';
  const VALID_PASSWORD = 'subscribe';
  const [email, setEmail] = useState(VALID_EMAIL);
  const [password, setPassword] = useState(VALID_PASSWORD);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  
  const handleLogin = () => {
    setLoading(true);
    setErrors([]);

    Keyboard.dismiss();

    //check with backend API or with some static data
    if (email !== VALID_EMAIL) {
      setErrors([...errors, "email"]);
    }else if (password !== VALID_PASSWORD) {
      setErrors([...errors, "password"]);
    }else {
      navigation.navigate('Browse');
    }
    setLoading(false);
  }

  const hasError = key => errors.includes(key) ? styles.hasErrors : null;
  
  return (
    <KeyboardAvoidingView style={styles.login} behavior="height">
      <Block padding={[0, theme.sizes.padding * 1.2]} >
        <Text h1 bold>Login</Text>
        <Block middle>
          <Input 
            label="Email"
            error={hasError('email')}
            style={[styles.input, hasError('email')]}
            defaultValue={email}
            onChangeText={text => setEmail(text)}
          />
          <Input 
            secure
            label="Senha"
            error={hasError('password')}
            style={[styles.input, hasError('password')]}
            defaultValue={password}
            onChangeText={text => setPassword(text)}
          />
          <Button gradient onPress={handleLogin}>
            {loading ?
              <ActivityIndicator size="small" color="white" /> :
              <Text bold white center>Login</Text>
            }
          </Button>

          <Button onPress={() => navigation.navigate('Forgot')}>
            <Text gray caption center style = {{ textDecorationLine: 'underline' }}>
              Esqueceu a Senha?
            </Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>    
  )
}

export default Login

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },

  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  hasErrors: {
    borderBottomColor: theme.colors.accent,
  }
})
