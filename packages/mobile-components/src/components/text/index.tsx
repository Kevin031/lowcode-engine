import { Text } from "@tarojs/components";
import cx from "classnames";
import { KtBaseProps } from "../../base/component-base";

interface KtTextProps extends KtBaseProps {
  children: string | React.ReactNode;
}

function KtText(props: KtTextProps) {
  return (
    <Text
      className={cx(props.className, "kt-text")}
      style={props.style}
      data-key={props.code}
    >
      {props.children}
    </Text>
  );
}

KtText.defaultProps = {
  children: "",
};

export default KtText;
