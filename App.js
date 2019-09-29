import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SqaureScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Color: ColorScreen,
    Square: SqaureScreen,
    Text: TextScreen,
    Box: BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
      headerTitleStyle: {
        textAlign: "center",
        flex: 1
      }
    }
  }
);

export default createAppContainer(navigator);
