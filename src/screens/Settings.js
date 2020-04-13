import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { Slider } from 'react-native-elements';

import { Button, Block, Text, Divider, Switch } from '../components'
import { theme, mocks } from '../constants'

const Settings = () => {
  const [budget, setBudget] = useState(850);
  const [monthlyCap, setMonthlyCap] = useState(1700);
  const [notifications, setNotifications] = useState(true);
  const [newsletter, setNewsletter] = useState(false);
  const [editing, setEditing] = useState(null);
  const [profileState, setProfileState] = useState([]);
  const { profile } = mocks;

  useEffect(() => {
    setProfileState(profile);
  }, []);

  const handleEdit = (name, text) => {
    const profile = profileState;
    profile[name] = text;
    setProfileState(profile);
  }

  const toogleEdit = name => {
    setEditing(!editing ? name : null);
  }

  const renderEdit = (name) => {
    if (editing === name) {
      return (
        <TextInput
          defaultValue={profileState[name]}
          onChangeText={text => handleEdit([name], text)}
        />
      )
    }

    return <Text bold>{profile[name]}</Text>
  }


  return (
    <Block style={{backgroundColor: 'white'}}>
      <Block flex={false} row center space="between" style={styles.header}>
        <Text h1 bold>Configurações</Text>
        <Button>
          <Image 
            source={profile.avatar}
            style={styles.avatar}
          />
        </Button>
      </Block>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Block style={styles.inputs}>
          <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
            <Block>
              <Text gray2 >Usuário</Text>
              {renderEdit('username')}
            </Block>
            <Text medium secondary onPress={() => toogleEdit('username')}>
              {editing === 'username' ? 'Salvar' : 'Editar'}
            </Text>
          </Block>
          <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
            <Block>
              <Text gray2 >Localização</Text>
              {renderEdit('location')}
            </Block>
            <Text medium secondary onPress={() => toogleEdit('location')}>
              {editing === 'location' ? 'Salvar' : 'Editar'}
            </Text>
          </Block>
          <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
            <Block>
              <Text gray2 >E-mail</Text>
              <Text bold>{profile.email}</Text>
            </Block>
          </Block>
        </Block>

        <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />

        <Block style={styles.sliders}>
          <Block margin={[10, 0]}>
            <Text gray2>Despesas</Text>
            <Slider 
              minimumValue={0}
              maximumValue={1000}
              // style={{ height: 19 }}
              thumbStyle={styles.thumb}
              trackStyle={{ height: 6, borderRadius: 6 }}
              minimumTrackTintColor={theme.colors.secondary}
              maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
              value={budget}
              onValueChange={value => setBudget(value)}
            />
            <Text caption gray right>R${budget.toFixed(0)}</Text>
          </Block>
          <Block margin={[10, 0]}>
            <Text gray2>Limite mensal</Text>
            <Slider 
              minimumValue={0}
              maximumValue={5000}
              // style={{ height: 19 }}
              thumbStyle={styles.thumb}
              trackStyle={{ height: 6, borderRadius: 6 }}
              minimumTrackTintColor={theme.colors.secondary}
              maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
              value={monthlyCap}
              onValueChange={value => setMonthlyCap(value)}
            />
            <Text caption gray right>R${monthlyCap.toFixed(0)}</Text>
          </Block>
        </Block>

        <Divider />

        <Block style={styles.toogles}>
          <Block row center space="between" style={{ marginBottom: theme.sizes.base * 2}}>
            <Text size={16} gray2>Notificações</Text>
            <Switch
              value={notifications}
              onValueChange={value => setNotifications(value)}
              style={{ height: 20 }}
            />
          </Block>

          <Block row center space="between" style={{ marginBottom: theme.sizes.base * 2}}>
            <Text size={16} gray2>Notícias</Text>
            <Switch
              value={newsletter}
              onValueChange={value => setNewsletter(value)}
            />
          </Block>
        </Block>
      </ScrollView>
    </Block>
  )
}

export default Settings

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2
  },

  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
  },

  inputs: {
    paddingHorizontal: theme.sizes.base * 2,
    marginTop: theme.sizes.base * 0.7,
  },

  inputRow: {
    alignItems: 'flex-end',
  },

  sliders: {
    paddingHorizontal: theme.sizes.base * 2,
    marginTop: theme.sizes.base * 0.7,
  },

  thumb: {
    width: theme.sizes.base,
    height: theme.sizes.base,
    borderRadius: theme.sizes.base,
    borderColor: 'white',
    borderWidth: 3,
    backgroundColor: theme.colors.secondary
  },

  toogles: {
    paddingHorizontal: theme.sizes.base * 2,
    marginTop: theme.sizes.base * 0.7,
  },

  switchs: {
    width: 100
  }
});