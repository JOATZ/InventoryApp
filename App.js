import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { persistor, store } from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Loading from './components/LoadingComponent'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <PersistGate loading={null} persistor={persistor}>
                    <View style={styles.container}>
                        <Text>
                            Open up App.js to start working on your app!
                        </Text>
                    </View>
                </PersistGate>
            </NavigationContainer>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
