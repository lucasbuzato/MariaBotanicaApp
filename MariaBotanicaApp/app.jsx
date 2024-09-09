import HomePage from './app/index'
import MarketPlace from './app/MarketPlace'
import ChatBot from './app/ChatBot'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function App(){
const Stack = createNativeStackNavigator();
    

    
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={HomePage}/>
                <Stack.Screen name='MarketPlace' component={MarketPlace}/>
                <Stack.Screen name='ChatBot' component={ChatBot}/>
            </Stack.Navigator>
            
        </NavigationContainer>
    )
}

export default App;