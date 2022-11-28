
import { NativeModules, Platform, StatusBar } from 'react-native';

const { RNStatusBar } = NativeModules;

export const getStatusBarHeight = () => {
    return new Promise((resolve, reject) => {
        if (Platform.OS === 'android') {
            resolve(StatusBar.currentHeight)
        } else if (Platform.OS === 'ios') {
            RNStatusBar.statusBarHeight((err, res) => {
                if (err) {
                    resolve(20)
                } else {
                    resolve(res)
                }
            })
        } else {
            resolve(20)
        }
    })
}
