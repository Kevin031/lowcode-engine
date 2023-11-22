import React from "react";
import { View } from "@tarojs/components";
import cx from "classnames";
import { KtBaseProps } from "../../base/component-base";

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
      data-key={props.code}
    >
      {props.children}
    </View>
  );
}

FlexBox.defaultProps = {};

export default FlexBox;
