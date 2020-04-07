import React, {useState} from 'react'
import { StyleSheet, KeyboardAvoidingView, Keyboard, ActivityIndicator, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { Button, Block, Text, Input } from '../components';
import { theme } from '../constants';

const Signup = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigation = useNavigation();

  const handleSignup = () => {
    setLoading(true);
    setErrors([]);

    Keyboard.dismiss();

    //check with backend API or with some static data
    if (!email) {
      setErrors([...errors, "email"]);
    }else if (!username) {
      setErrors([...errors, "username"]);
    }else if (!password) {
      setErrors([...errors, "password"]);
    }else{
      Alert.alert(
        'Sucesso', 
        'Sua conta foi criada!',
        [
          {
            text: 'Continue', onPress: () => {
              navigation.navigate('Browse')
            }
          }
        ],
        { cancelable: false }
      );
    }
    setLoading(false);
  }

  const hasError = key => errors.includes(key) ? styles.hasErrors : null;

  return (
    <KeyboardAvoidingView style={styles.signup} behavior="height">
      <Block padding={[0.1, theme.sizes.padding * 1.2]}>
      <Text h1 bold>Cadastro</Text>
        <Block middle>
          <Input
            email
            label="Email"
            error={hasError('email')}
            style={[styles.input, hasError('email')]}
            defaultValue={email}
            onChangeText={text => setEmail(text)}
          />
          <Input
            label="Usuário"
            error={hasError('username')}
            style={[styles.input, hasError('username')]}
            defaultValue={username}
            onChangeText={text => setUsername(text)}
          />
          <Input
            secure
            label="Senha"
            error={hasError('password')}
            style={[styles.input, hasError('password')]}
            defaultValue={password}
            onChangeText={text => setPassword(text)}
          />
          <Button gradient onPress={handleSignup} >
            {loading ?
              <ActivityIndicator size="small" color="white" /> :
              <Text bold white center>Cadastre-se</Text>
            }
          </Button>

          <Button onPress={() => navigation.goBack()}>
            <Text gray caption center style = {{ textDecorationLine: 'underline' }}>
              Voltar para o Login
            </Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  )
}

export default Signup;

const styles = StyleSheet.create({
  signup: {
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
