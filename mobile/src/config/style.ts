import { Dimensions } from 'react-native'
import { PixelRatio } from 'react-native'
import { Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

export const Colors = {
  primary: '#1E90FF',
  secondary: '#FFA500',
  white: '#FFFFFF',
  black: '#000000',
}

const guidlineBaseWidth = 375
const guidelineBaseHeight = 812

// It would require widht/height parameter from useWindowDimensions to get reactive scaling

export const horizontalScale = (size: number) => (width / guidlineBaseWidth) * size
export const verticalScale = (size: number) => (height / guidelineBaseHeight) * size
export const factorScale = (size: number, factor: number = 0.5) =>
  size + (horizontalScale(size) - size) * factor

export const scaleFontSize = (size: number) => {
  const newSize = horizontalScale(size)

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize) / PixelRatio.getFontScale())
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize) / PixelRatio.getFontScale()) - 1
  }
}
