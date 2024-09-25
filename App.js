import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider, Text } from "react-native-paper";
import TodoApp from "./screen/TodoApp";

const App =()=>{
  
  return(
    <NavigationContainer>
      <PaperProvider>
        <TodoApp/>
      </PaperProvider>
    </NavigationContainer>

  );

} 
export default App