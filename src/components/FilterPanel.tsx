import React from 'react'
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import { filterPanelStyles } from '../styles/FilterPanelStyles'

interface FilterPanelProps {
  isVisible: boolean
  onClose: () => void
  onFilter: (filter: string | null) => void
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  isVisible,
  onClose,
  onFilter,
}) => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={filterPanelStyles.container}>
        <TouchableOpacity onPress={() => onFilter('male')}>
          <Text style={filterPanelStyles.filterOption}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onFilter('female')}>
          <Text style={filterPanelStyles.filterOption}>Female</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onFilter(null)}>
          <Text style={filterPanelStyles.filterOption}>Clear Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClose}>
          <Text style={filterPanelStyles.filterOption}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default FilterPanel
