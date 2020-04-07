import React, {useState} from 'react'
import { StyleSheet, KeyboardAvoidingView, Keyboard, ActivityIndicator, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { Button, Block, Text, Input } from '../components';
import { theme } from '../constants';

const Forgot = () => {
  const VALID_EMAIL = 'contact@react-ui-kit.com';
  const [email, setEmail] = useState(VALID_EMAIL);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigation = useNavigation();

  const handleForgot = () => {
    setLoading(true);
    setErrors([]);

    Keyboard.dismiss();

    //check with backend API or with some static data
    if (email !== VALID_EMAIL) {
      setErrors([...errors, "email"]);
      Alert.alert(
        'Erro', 
        'Por favor cheque seu endereço de email!',
        [
          {
            text: 'Tente novamente',
          }
        ],
        { cancelable: false }
      )
    }else{
      Alert.alert(
        'Senha Enviada!', 
        'Por favor cheque seu email!',
        [
          {
            text: 'OK', onPress: () => {
              navigation.navigate('Login');
            } 
          }
        ],
        { cancelable: false }
      )
    }

    setLoading(false);
  }

  const hasError = key => errors.includes(key) ? styles.hasErrors : null;

  return (
    <KeyboardAvoidingView style={styles.forgot} behavior="padding">
      <Block padding={[0, theme.sizes.padding * 1.2]}>
      <Text h1 bold>Forgot</Text>
        <Block middle>
          <Input 
            label="Email"
            error={hasError('email')}
            style={[styles.input, hasError('email')]}
            defaultValue={email}
            onChangeText={text => setEmail(text)}
          />
          <Button gradient onPress={handleForgot} >
            {loading ?
              <ActivityIndicator size="small" color="white" /> :
              <Text bold white center>Esqueci a senha</Text>
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

export default Forgot;

const styles = StyleSheet.create({
  forgot: {
    flex: 1,
    justifyContent: 'center'
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
