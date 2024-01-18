import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { filterButtonStyles } from '../styles/FilterButtonStyles'

interface FilterButtonProps {
  onPress: () => void
  filterColor: string
}

const FilterButton: React.FC<FilterButtonProps> = ({
  onPress,
  filterColor,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={filterButtonStyles.container}>
      <View
        style={[
          filterButtonStyles.filterButton,
          { backgroundColor: filterColor },
        ]}
      >
        <Image
          source={require('../../assets/filterLogo.png')}
          style={filterButtonStyles.filterButtonImage}
        />
        <Text style={[filterButtonStyles.filterButtonText]}>Filter</Text>
      </View>
    </TouchableOpacity>
  )
}

export default FilterButton
