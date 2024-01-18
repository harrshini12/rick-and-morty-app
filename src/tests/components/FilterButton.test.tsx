import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import FilterButton from '../../components/FilterButton'

describe('FilterButton', () => {
  it('renders the filter button correctly', () => {
    const onPressMock = jest.fn()
    const { getByText } = render(
      <FilterButton onPress={onPressMock} filterColor='blue' />,
    )

    // Check if the filter button text is rendered
    const filterButtonText = getByText('Filter')
    expect(filterButtonText).toBeDefined()

    // Check if the filter button press event is triggered
    fireEvent.press(filterButtonText)
    expect(onPressMock).toHaveBeenCalledTimes(1)
  })
})
