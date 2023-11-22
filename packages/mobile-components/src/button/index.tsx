import React from "react";
import { View } from "@tarojs/components";
import cx from "classnames";

interface KtButtonProps {
  children: string | React.ReactNode;

  type?: "primary" | "error" | "success" | "disable";

  size?: "middle" | "small";
}

function KtButton(props: KtButtonProps) {
  return (
    <View
      className={cx(
        "kt-button",
        `kt-button-${props.type}`,
        `kt-button-${props.size}`,
      )}
    >
      <View>{props.children}</View>
    </View>
  );
}

KtButton.defaultProps = {
  children: "按钮",
  type: "primary",
  size: "middle",
};

export default KtButton;
