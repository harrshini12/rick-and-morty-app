import { StyleSheet } from 'react-native'

export const filterButtonStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -16,
    right: 8,
    zIndex: 1,
    marginRight: 10,
  },
  filterButton: {
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterButtonText: {
    marginLeft: 5,
  },
  filterButtonImage: {
    width: 15,
    height: 15,
  },
})
