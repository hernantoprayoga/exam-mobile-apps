import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

//components
import Home from "./components/Home";

//style components
import { Container } from "./styles/appStyles";

//async storage
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";

export default function App() {
  const [ready, setReady] = useState(false);

  //initial todo
  const initialTodos = [];

  const [todos, setTodos] = useState(initialTodos);

  const loadTodos = () => {
    AsyncStorage.getItem("storedTodos")
      .then((data) => {
        if (data !== nul) {
          setTodos(JSON.parse(data));
        }
      })
      .catch((error) => console.log(error));
  };

  if (!ready) {
    return <AppLoading startAsync={loadTodos} onFinish={() => setReady(true)} onError={console.warn} />;
  }

  return (
    <Container>
      <Home todos={todos} setTodos={setTodos} />
      <StatusBar style="light" />
    </Container>
  );
}
