import React from "react";
import { View } from "@tarojs/components";
import cx from "classnames";
import { KtBaseProps } from "../../base/component-base";

interface KtButtonProps extends KtBaseProps {
  /**
   * 内容
   */
  children: string | React.ReactNode;

  /**
   * 类型
   */
  type?: "primary" | "error" | "success" | "disable";

  /**
   * 尺寸
   */
  size?: "middle" | "small";
}

function KtButton(props: KtButtonProps) {
  return (
    <View
      className={cx(
        props.className,
        "kt-button",
        `kt-button-${props.type}`,
        `kt-button-${props.size}`,
      )}
      style={props.style}
      data-key={props.code}
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
