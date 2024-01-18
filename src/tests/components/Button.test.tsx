import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import Button from '../../components/Button'

describe('Button Component', () => {
  test('renders correctly', () => {
    const { getByText } = render(
      <Button onPress={() => {}} title='Test Button' />,
    )
    expect(getByText('Test Button')).toBeTruthy()
  })

  test('calls onPress function when pressed', () => {
    const onPressMock = jest.fn()
    const { getByText } = render(
      <Button onPress={onPressMock} title='Test Button' />,
    )
    fireEvent.press(getByText('Test Button'))
    expect(onPressMock).toHaveBeenCalledTimes(1)
  })
})
