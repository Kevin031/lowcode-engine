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
}
