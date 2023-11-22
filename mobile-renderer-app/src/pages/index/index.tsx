import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import { KtButton, KtText } from "@kt-lowcode-engine/mobile-components";
import "./index.less";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  let a = function () {};

  return (
    <View className="index" style={{ padding: 30 }}>
      <KtButton>按钮</KtButton>
      <KtButton type="success">按钮</KtButton>
      <KtButton type="error">按钮</KtButton>
      <KtText>
        由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
      </KtText>
    </View>
  );
}
