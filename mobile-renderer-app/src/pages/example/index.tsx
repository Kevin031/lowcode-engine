import { View } from "@tarojs/components";
// import {
//   KtButton,
//   KtText,
//   KtFlexBox,
// } from "@kt-lowcode-engine/mobile-components";
import KtRenderer from "@kt-lowcode-engine/mobile-renderer";

const rendererData = {
  components: {
    KtButton: {
      name: "KtButton",
      source: "@kt-lowcode-engine/mobile-components",
    },
    KtText: {
      name: "KtText",
      source: "@kt-lowcode-engine/mobile-components",
    },
    KtFlexBox: {
      name: "KtFlexBox",
      source: "@kt-lowcode-engine/mobile-components",
    },
  },
  schema: [
    {
      component: "KtButton",
      code: Math.random().toString(),
      props: {
        children: "按钮",
        type: "success",
      },
    },
    {
      component: "KtText",
      code: Math.random().toString(),
      props: {
        children:
          "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
      },
    },
    {
      component: "KtFlexBox",
      code: Math.random().toString(),
      props: {
        style: {
          flexDirection: "row",
          justifyContent: "center",
        },
      },
      children: [
        {
          component: "KtButton",
          code: Math.random().toString(),
          props: {
            children: "按钮",
            type: "success",
          },
        },
        {
          component: "KtButton",
          code: Math.random().toString(),
          props: {
            children: "按钮2",
            type: "error",
          },
        },
      ],
    },
    {
      component: "KtFlexBox",
      code: Math.random().toString(),
      props: {
        style: {
          marginTop: 100,
          flexDirection: "row",
          justifyContent: "center",
        },
      },
      children: [
        {
          component: "KtButton",
          code: Math.random().toString(),
          props: {
            children: "按钮",
            type: "success",
          },
        },
        {
          component: "KtButton",
          code: Math.random().toString(),
          props: {
            children: "按钮2",
            type: "error",
          },
        },
      ],
    },
  ],
};

export default function Index() {
  return (
    <View className="index" style={{ padding: 30 }}>
      {/* <KtButton>按钮</KtButton>
      <KtButton type="success">按钮</KtButton>
      <KtButton type="error">按钮</KtButton>
      <KtText>
        由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
      </KtText>
      <KtFlexBox style={{ flexDirection: "row", justifyContent: "center" }}>
        <KtButton type="success">按钮</KtButton>
        <KtButton type="error">按钮</KtButton>
      </KtFlexBox>
      <KtFlexBox style={{ flexDirection: "column" }}>
        <KtButton type="success">按钮</KtButton>
        <KtButton type="error">按钮</KtButton>
      </KtFlexBox> */}
      <KtRenderer {...rendererData} />
    </View>
  );
}
