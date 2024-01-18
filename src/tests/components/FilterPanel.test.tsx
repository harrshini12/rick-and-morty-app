import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import FilterPanel from '../../components/FilterPanel'

describe('FilterPanel', () => {
  it('renders the filter panel correctly', () => {
    const onCloseMock = jest.fn()
    const onFilterMock = jest.fn()
    const { getByText } = render(
      <FilterPanel
        isVisible={true}
        onClose={onCloseMock}
        onFilter={onFilterMock}
      />,
    )

    // Check if filter options are rendered
    const maleFilterOption = getByText('Male')
    expect(maleFilterOption).toBeDefined()

    const femaleFilterOption = getByText('Female')
    expect(femaleFilterOption).toBeDefined()

    const clearFilterOption = getByText('Clear Filter')
    expect(clearFilterOption).toBeDefined()

    const closeFilterOption = getByText('Close')
    expect(closeFilterOption).toBeDefined()

    // Check if the filter options trigger the corresponding events
    fireEvent.press(maleFilterOption)
    expect(onFilterMock).toHaveBeenCalledWith('male')

    fireEvent.press(femaleFilterOption)
    expect(onFilterMock).toHaveBeenCalledWith('female')

    fireEvent.press(clearFilterOption)
    expect(onFilterMock).toHaveBeenCalledWith(null)

    fireEvent.press(closeFilterOption)
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })
})
