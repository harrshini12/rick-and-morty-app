import React from 'react'
import { render, fireEvent, waitFor, act } from '@testing-library/react-native'
import HomeScreen from '../../screens/HomeScreen'

const mockData = {
  characters: {
    results: [
      {
        id: '1',
        name: 'Rick',
        gender: 'Male',
        species: 'Human',
        image: 'https://example.com/rick.jpg',
      },
    ],
    info: {
      next: 2,
    },
  },
}

// Mock the useQuery hook to provide data to the component
jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useQuery: jest.fn(() => ({
    loading: false,
    error: null,
    data: mockData,
    fetchMore: jest.fn().mockResolvedValue({ data: mockData }),
  })),
}))

describe('HomeScreen', () => {
  it('renders characters and handles load more', async () => {
    const { getByText } = render(<HomeScreen />)

    // Check if the first character's name is rendered
    const firstCharacterName = getByText('Rick')
    expect(firstCharacterName).toBeDefined()

    // Check if the "Load More" button is rendered and not disabled
    const loadMoreButton = getByText('Load More')
    expect(loadMoreButton).toBeDefined()
    expect(loadMoreButton.props.disabled).toBeFalsy()

    // Simulate a press on the "Load More" button
    await act(async () => {
      fireEvent.press(loadMoreButton)
      const newCharacterName = await getByText('Rick')
      expect(newCharacterName).toBeDefined()
    })
  }, 10000)

  it('handles filter and updates the displayed characters', async () => {
    const { getByText } = render(<HomeScreen />)

    // Check if the "Filter" button is rendered
    const filterButton = getByText('Filter')
    expect(filterButton).toBeDefined()

    // Simulate a press on the "Filter" button
    fireEvent.press(filterButton)

    // Wait for the filter panel to be rendered
    await waitFor(() => {})

    // Check if the "Male" filter option is rendered
    const maleFilterOption = getByText('Male')
    expect(maleFilterOption).toBeDefined()

    // Simulate a press on the "Male" filter option
    fireEvent.press(maleFilterOption)

    // Wait for the filter to be applied
    await waitFor(() => {})

    // Check if the displayed characters are updated
    const displayedCharacter = getByText('Rick')
    expect(displayedCharacter).toBeDefined()
  })
})
