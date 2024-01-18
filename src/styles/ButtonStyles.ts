import { StyleSheet } from 'react-native'

export const buttonStyles = StyleSheet.create({
  button: {
    padding: 16,
    backgroundColor: '#3498db',
    borderRadius: 8,
    marginVertical: 16,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#bdc3c7',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
