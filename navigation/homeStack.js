import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import homeScreen from './screens/home.js';
import aboutScreen from './screens/about.js';

const screens = {
    Home: {
        screen: homeScreen
    },
    About: {
        screen: aboutScreen
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);