import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { useState } from 'react';
import Formik from 'formik';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [breed, setBreed] = useState('');
  const [toy, setToy] = useState('');
  return (
    <View style={styles.container}>
      
      <ScrollView>
        <InputWithLabel
          label="Email"
          placeholder="Type your email here"
          value={email}
          onChangeText={setEmail}
        />
        <InputWithLabel
          label="Password"
          placeholder="Type your password here"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <InputWithLabel
          label="Confirm password"
          placeholder="Re-type your password here"
          onSubmitEditing={(e) => {
            confirmPasswordsMatch(e.nativeEvent.text, password);
          }}
          secureTextEntry
        />
        <InputWithLabel
          label="Name"
          placeholder="Type your dog's name here"
          value={name}
          onChangeText={setName}
        />
        <InputWithLabel
          label="Birthday"
          placeholder="Type your dog's date of birth here"
          value={birthday}
          onChangeText={setBirthday}
        />
        <InputWithLabel
          label="Breed"
          placeholder="Type your dog's breed here"
          value={breed}
          onChangeText={setBreed}
        />
        <InputWithLabel
          label="Favorite toy"
          placeholder="Type your dog's favorite toy here"
          value={toy}
          onChangeText={setToy}
        />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

function confirmPasswordsMatch(confirmation, original) {
  if (confirmation !== original) {
    alert('Passwords do not match, please try again.');
  }
}

const InputWithLabel = (props) => {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ padding: 8, fontSize: 18 }}>
        {props.label}
      </Text>
      <TextInput
        style={{ padding: 8, fontSize: 16 }}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        onSubmitEditing={props.onSubmitEditing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ScrollView: {
    flex: 1, 
    justifyContent: 'center', 
    backgroundColor: '#ecf0f1'
  }
});
