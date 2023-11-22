import React, { useState, useEffect, useCallback } from "react";
import { Block, View } from "@tarojs/components";
import { KtBaseProps } from "../../base/component-base";

// 需要导入其它组件
import KtButton from "../button";
import KtText from "../text";
import KtFlexBox from "../flex-box";
const KtComponentMap = {
  KtButton,
  KtText,
  KtFlexBox,
};

interface IComponentSchema {
  name: string;
  source: string;
}

interface LayoutMetaSchema {
  component: string;
  code: string;
  props?: object;
  children?: LayoutSchema;
}

type LayoutSchema = Array<LayoutMetaSchema>;

interface KtRendererProps extends KtBaseProps {
  components: {
    [key: string]: IComponentSchema;
  };
  schema: LayoutSchema;
}

function ComponentLoader({ tag, props = {}, code, children = [], components }) {
  const Comp = KtComponentMap[tag];
  console.log("children", children);
  return (
    <Comp code={code} {...props}>
      {children.length ? (
        <Renderer components={components} schema={children} />
      ) : (
        (props as any).children
      )}
    </Comp>
  );
}

function Renderer(props: KtRendererProps) {
  const renderComponent = useCallback((item) => {
    return (
      <ComponentLoader
        key={item.code}
        code={item.code}
        tag={item.component}
        props={item.props}
        children={item.children}
        components={props.components}
      />
    );
  }, []);

  return <Block>{props.schema.map(renderComponent)}</Block>;
}

Renderer.defaultProps = {
  components: {},
  schema: [],
};

export default Renderer;
