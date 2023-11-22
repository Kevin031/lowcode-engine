import React from "react";
import { View } from "@tarojs/components";
import cx from "classnames";
import { KtBaseProps, register } from "../../base/component-base";

interface KtFlexBoxProps extends KtBaseProps {
  /**
   * 子元素
   */
  children: string | React.ReactNode;
}

function FlexBox(props: KtFlexBoxProps) {
  return (
    <View
      className={cx(props.className, "kt-flex-box")}
      style={props.style}
      {...props.meta}
    >
      {props.children}
    </View>
  );
}

FlexBox.defaultProps = {};

export default register({
  name: "KtFlexBox",
})(FlexBox);
