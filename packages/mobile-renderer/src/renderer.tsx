import React, { useState, useEffect, useCallback } from "react";
import { Block, View } from "@tarojs/components";
import "./index.less";

// 需要导入其它组件
import {
  KtButton,
  KtText,
  KtFlexBox,
} from "@kt-lowcode-engine/mobile-components";
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

interface KtRendererProps {
  components: {
    [key: string]: IComponentSchema;
  };
  schema: LayoutSchema;
}

function Renderer(props: KtRendererProps) {
  const renderComponent = useCallback((item) => {
    const Comp = KtComponentMap[item.component];
    return (
      <Comp key={item.code} code={item.code} {...item.props}>
        {item.children
          ? renderComponentList(item.children)
          : item.props.children}
      </Comp>
    );
  }, []);

  const renderComponentList = useCallback((schema) => {
    return schema.map(renderComponent);
  }, []);

  useEffect(() => {
    if (document) {
      const nodes = document.querySelectorAll<HTMLElement>("[data-component]");
      for (let node of nodes) {
        if (node.querySelector(".kt-com-operation")) continue;
        let { component } = node.dataset;
        const operationNode = document.createElement("div");
        operationNode.classList.add("kt-com-operation");
        // operationNode.innerText = component as string;
        node.appendChild(operationNode);
      }
    }
  }, []);

  return <Block>{renderComponentList(props.schema)}</Block>;
}

Renderer.defaultProps = {
  components: {},
  schema: [],
};

export default Renderer;
