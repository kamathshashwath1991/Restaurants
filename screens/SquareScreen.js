import React, {useReducer} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import SquareDetail from '../Components/SquareDetail';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : {...state, red: state.red + action.amount};
    case 'green':
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : {...state, red: state.green + action.amount};
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : {...state, red: state.blue + action.amount};
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  const {red, green, blue} = state;

  return (
    <View>
      <SquareDetail
        onIncrease={() =>
          dispatch({colorToChange: 'red', amount: COLOR_INCREMENT})
        }
        onDecrease={() =>
          dispatch({colorToChange: 'red', amount: -1 * COLOR_INCREMENT})
        }
        title="Red"
      />
      <SquareDetail
        onIncrease={() =>
          dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT})
        }
        onDecrease={() =>
          dispatch({colorToChange: 'blue', amount: -1 * COLOR_INCREMENT})
        }
        title="Blue"
      />
      <SquareDetail
        onIncrease={() =>
          dispatch({colorToChange: 'green', amount: COLOR_INCREMENT})
        }
        onDecrease={() =>
          dispatch({colorToChange: 'green', amount: -1 * COLOR_INCREMENT})
        }
        title="Green"
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: `rgb(${red},${blue},${green})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default SquareScreen;
 