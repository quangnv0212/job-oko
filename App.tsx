import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import COLORS from "./src/constants/colors";
import RootNavigation from "./src/navigation/rootNavigation";
import { store } from "./src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <RootNavigation />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg_white,
  },
});

export default App;
