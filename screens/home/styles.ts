import { COLORS, FONTS } from '../../constants'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingTop: 40
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.poppins_500,
    color: COLORS.dark_800
  },
  strong: {
    fontFamily: FONTS.poppins_800
  }
})
