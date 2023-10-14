import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";


function CustomButton() {
  return /*#__PURE__*/ _jsx(TouchableOpacity, {
    onPress: () => Alert.alert("Hello!"),
    children: /*#__PURE__*/ _jsx(Animated.Text, {
      children: "Click here!",
    }),
  });
}
export default function wormhole() {
  const message = React.useMemo(() => "Hello, world!", []);
  return /*#__PURE__*/ _jsxs(Animated.View, {
    style: {
      flex: 1,
      backgroundColor: "red",
    },
    children: [
      /*#__PURE__*/ _jsx(Animated.Text, {
        children: message,
      }),
      /*#__PURE__*/ _jsx(CustomButton, {}),
    ],
  });
}
