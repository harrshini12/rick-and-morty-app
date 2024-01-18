import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { buttonStyles } from '../styles/ButtonStyles'

interface ButtonProps {
  onPress: () => void
  title: string
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  disabled = false,
}) => (
  <TouchableOpacity
    style={[buttonStyles.button, disabled && buttonStyles.disabledButton]}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={buttonStyles.buttonText}>{title}</Text>
  </TouchableOpacity>
)

export default Button
