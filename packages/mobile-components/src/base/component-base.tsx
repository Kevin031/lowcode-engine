import React from "react";

export interface KtBaseProps {
  /**
   * class类名
   */
  className?: string;

  /**
   * CSS样式
   */
  style?: React.CSSProperties;

  /**
   * 组件唯一标识
   */
  code?: string;

  meta?: {
    [key: string]: string;
  };
}

export const register = ({ name }) => {
  return (Comp) => {
    return (props) => {
      return (
        <Comp
          {...props}
          meta={{
            "data-component": name,
            "data-code": props.code,
          }}
        />
      );
    };
  };
};
