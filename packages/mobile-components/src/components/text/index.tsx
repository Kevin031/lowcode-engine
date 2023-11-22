import { View, Text } from "@tarojs/components";
import cx from "classnames";
import { KtBaseProps, register } from "../../base/component-base";

interface KtTextProps extends KtBaseProps {
  children: string | React.ReactNode;
}

function KtText(props: KtTextProps) {
  return (
    <View
      className={cx(props.className, "kt-text")}
      style={props.style}
      {...props.meta}
    >
      <Text>{props.children}</Text>
    </View>
  );
}

KtText.defaultProps = {
  children: "",
};

export default register({
  name: "KtText",
})(KtText);
