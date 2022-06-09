import React from "react";
import { Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from "./style";

export function ButtonConfirm({ ...rest }: RectButtonProps) {
  return (
    <RectButton style={styles.buttonStyle} {...rest}>
      <Text style={styles.buttonText}>Confirmar</Text>
    </RectButton>
  );
}
