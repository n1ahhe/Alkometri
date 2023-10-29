import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
    
  },
  appContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    
  },
  inputContainer: {
    alignItems: 'center',
    
  },
  numericInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lightTheme: {
    backgroundColor: '#FEFAE0',
  },
  darkTheme: {
    backgroundColor: '#BC6C25',
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 25,
    textAlign: 'center',
    color: '#4C86A8',
  },
  label: {
    fontSize: 25,
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'center'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    
    
  },
  radioButton: {
    fontSize: 25,
    margin: 12,
    marginRight: 10,
    textAlign: 'center'
  },
  calculateButton: {
    marginTop: 10,
    textAlign: 'center',
  },
  calculateButtonContainer: {
    marginTop: 20,
    alignItems: 'center',
    
  },
  calculateButtonText: {
    color: '#4C86A8', 
    fontSize: 30, 
    fontWeight: 'bold', 
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
    
  },
  resultText: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center'
  },
  resultBox: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  resultStatus: {
    
    fontSize: 33,
    textAlign: 'center',
    marginTop: 10,
    
  },
  themeToggle: {
    marginTop: 5,
    alignItems: 'center',
    
  },
  chooseThemeText: {
    fontSize: 25, 
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#4C86A8', 
  },
  safeColor: 'green',
  cautionColor: 'yellow',
  dangerColor: 'red',
});
