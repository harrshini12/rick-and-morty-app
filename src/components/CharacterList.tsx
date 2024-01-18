import React from 'react'
import { FlatList, Text, Image, View } from 'react-native'
import { characterListStyles } from '../styles/CharacterListStyles'
import { Character } from '../types'

interface CharacterListProps {
  characters: Character[]
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  const renderItem = ({ item }: { item: Character }) => (
    <View key={item.id} style={characterListStyles.itemContainer}>
      <Image source={{ uri: item.image }} style={characterListStyles.image} />
      <View style={characterListStyles.textContainer}>
        <Text style={characterListStyles.name}>{item.name}</Text>
        <Text
          style={characterListStyles.details}
        >{`Gender: ${item.gender}`}</Text>
        <Text
          style={characterListStyles.details}
        >{`Species: ${item.species}`}</Text>
      </View>
    </View>
  )

  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  )
}

export default CharacterList
