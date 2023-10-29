import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import Styles from './Styles';

export default function AlcometerApp() {
  const [weight, setWeight] = useState('');
  const [time, setTime] = useState(1);
  const [bottles, setBottles] = useState(1);
  const [gender, setGender] = useState('male');
  const [theme, setTheme] = useState('light');
  const [result, setResult] = useState(0);
  const [resultColor, setResultColor] = useState('green');

  const checkWeight = () => {
    if (!weight) {
      alert('Please enter your weight.');
      return false;
    }
    return true;
  };

  const calculateBloodAlcoholLevel = () => {
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - burning * time;
    let calculatedResult = 0;
    let calculatedResultColor = 'green';

    if (!checkWeight()) {
      return;
    }

    if (gender === 'male') {
      calculatedResult = gramsLeft / (weight * 0.7);
    } else if (gender === 'female') {
      calculatedResult = gramsLeft / (weight * 0.6);
    }

    if (calculatedResult < 0) {
      calculatedResult = 0;
    }

    if (calculatedResult > 0.05 && calculatedResult <= 0.08) {
      calculatedResultColor = 'yellow';
    } else if (calculatedResult > 0.08) {
      calculatedResultColor = 'red';
    }

    setResult(calculatedResult);
    setResultColor(calculatedResultColor);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ScrollView style={[Styles.container, theme === 'dark' ? Styles.darkTheme : Styles.lightTheme]}>
      <View style={[Styles.appContainer, theme === 'dark' ? Styles.darkTheme : Styles.lightTheme]}>
        <Text style={Styles.heading}>Alcometer</Text>
        <Text style={Styles.label}>Weight (kg)</Text>
        <TextInput
          style={Styles.textInput}
          keyboardType="numeric"
          onChangeText={(text) => setWeight(text)}
          value={weight}
        />
        <View style={Styles.inputContainer}>
          <Text style={Styles.label}>Time (hours)</Text>
          <View style={Styles.numericInputContainer}>
            <NumericInput value={time} onChange={setTime} />
          </View>
        </View>

        <View style={Styles.inputContainer}>
          <Text style={Styles.label}>Number of Bottles</Text>
          <View style={Styles.numericInputContainer}>
            <NumericInput value={bottles} onChange={setBottles} />
          </View>
        </View>
        <Text style={Styles.label}>Gender</Text>
        <TouchableOpacity onPress={() => setGender('male')}>
          <Text style={Styles.radioButton}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setGender('female')}>
          <Text style={Styles.radioButton}>Female</Text>
        </TouchableOpacity>
        <View style={Styles.calculateButtonContainer}>
          <TouchableOpacity style={Styles.calculateButton} onPress={calculateBloodAlcoholLevel}>
            <Text style={Styles.calculateButtonText}>Calculate</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.resultContainer}>
          <Text
            style={{
              ...Styles.resultText,
              color:
                result <= 0.05
                  ? Styles.safeColor
                  : result <= 0.08
                  ? Styles.cautionColor
                  : Styles.dangerColor,
            }}
          >
            Blood Alcohol Level: {result.toFixed(2)}
          </Text>
          <View style={Styles.resultBox}>
            <Text style={Styles.resultStatus}>
              {result <= 0.05 ? 'Safe' : result <= 0.08 ? 'Caution' : 'Danger'}
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={toggleTheme} style={Styles.themeToggle}>
          <Text style={Styles.chooseThemeText}>Choose a theme</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
