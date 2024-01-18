import React, { useState, useEffect } from 'react'
import { SafeAreaView, View } from 'react-native'
import CharacterList from '../components/CharacterList'
import CustomButton from '../components/Button'
import FilterPanel from '../components/FilterPanel'
import FilterButton from '../components/FilterButton'
import { useQuery } from '@apollo/client'
import { GET_CHARACTERS } from '../graphql/queries'
import { homeScreenStyles } from '../styles/HomeScreenStyles'
import { Character, CharactersData } from '../types'

const HomeScreen: React.FC = () => {
  const [characters, setCharacters] = useState<CharactersData | null>(null)
  const [filter, setFilter] = useState<string | null>(null)
  const [isFilterPanelVisible, setFilterPanelVisible] = useState(false)

  const { loading, error, data, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: { page: 1 },
  })

  useEffect(() => {
    if (data && data.characters) {
      setCharacters((prevCharacters) => ({
        characters: {
          info: data.characters.info,
          results: [
            ...(prevCharacters?.characters.results || []),
            ...data.characters.results,
          ],
        },
      }))
    }
  }, [data])

  const handleLoadMore = async () => {
    try {
      const nextPage = characters?.characters.info.next
      if (nextPage) {
        const { data: moreData } = await fetchMore({
          variables: { page: nextPage },
        })

        const newCharacters: Character[] | undefined =
          moreData?.characters.results
        if (newCharacters) {
          const uniqueNewCharacters = newCharacters.map(
            (character: Character) => ({
              ...character,
              id: character.id + (characters?.characters.results?.length || 0),
            }),
          )

          setCharacters((prevCharacters) => ({
            characters: {
              results: [
                ...(prevCharacters?.characters.results || []),
                ...uniqueNewCharacters,
              ],
              info: moreData.characters.info,
            },
          }))
        }
      }
    } catch (error) {
      console.error('Error fetching more characters:', error)
    }
  }

  const handleFilter = (selectedFilter: string | null) => {
    setFilter(selectedFilter)
    setFilterPanelVisible(false)
  }

  const displayedCharacters: Character[] | undefined = filter
    ? characters?.characters.results.filter(
        (character) => character.gender.toLowerCase() === filter,
      )
    : characters?.characters.results

  return (
    <SafeAreaView style={homeScreenStyles.safeAreaView}>
      <View style={homeScreenStyles.container}>
        <CharacterList characters={displayedCharacters || []} />

        {characters && characters.characters.info.next && (
          <CustomButton
            title='Load More'
            onPress={handleLoadMore}
            disabled={loading}
          />
        )}

        <FilterButton
          onPress={() => setFilterPanelVisible(true)}
          filterColor={
            filter === 'male' || filter === 'female' ? '#3498db' : 'white'
          }
        />

        <FilterPanel
          isVisible={isFilterPanelVisible}
          onClose={() => setFilterPanelVisible(false)}
          onFilter={handleFilter}
        />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
