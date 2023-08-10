import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../views/Landing/Landing'
import Signin from '../views/Signin/Signin'

const RootNavigator = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen name='Landing' component={Landing} />
      <Stack.Screen name='Signin' component={Signin} />
    </Stack.Navigator>
  )
}

export default RootNavigator
