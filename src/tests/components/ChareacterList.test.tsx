import React from 'react'
import { render } from '@testing-library/react-native'
import CharacterList from '../../components/CharacterList'

const mockCharacters = [
  {
    id: '1',
    name: 'Rick',
    gender: 'Male',
    species: 'Human',
    image: 'https://example.com/rick.jpg',
  },
]

describe('CharacterList', () => {
  it('renders the list of characters correctly', () => {
    const { getByText } = render(<CharacterList characters={mockCharacters} />)

    // Check if the first character's name is rendered
    const firstCharacterName = getByText('Rick')
    expect(firstCharacterName).toBeDefined()

    // Check if the first character's gender is rendered
    const firstCharacterGender = getByText('Gender: Male')
    expect(firstCharacterGender).toBeDefined()

    // Check if the first character's species is rendered
    const firstCharacterSpecies = getByText('Species: Human')
    expect(firstCharacterSpecies).toBeDefined()
  })
})
