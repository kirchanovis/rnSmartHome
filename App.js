import React, { useReducer } from "react";
import { StyleSheet } from "react-native";
import SmartHome from './navigation/SmartHome';
import { Context } from './context'
import reducer from './reducers'

function App() {
  const initialState = reducer({}, { type: '__INIT__' }),
    [state, dispatch] = useReducer(reducer, initialState);

    return (
      <Context.Provider 
        value={{ dispatch, state }}
      >
        <SmartHome />
      </Context.Provider>
    );
}

export default App;

const styles = StyleSheet.create({});
