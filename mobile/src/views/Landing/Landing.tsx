import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from 'react-native'
import { scaleFontSize } from '../../config/style'

const Landing = () => {
  console.log(scaleFontSize(16))
  return (
    <SafeAreaView>
      <Text style={{ fontSize: scaleFontSize(16) }}>Landing</Text>
    </SafeAreaView>
  )
}

export default Landing
