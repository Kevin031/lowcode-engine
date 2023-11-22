import { Text } from "@tarojs/components";

interface KtTextProps {
  children: string | React.ReactNode;
}

function KtText(props: KtTextProps) {
  return <Text className="kt-text">{props.children}</Text>;
}

KtText.defaultProps = {
  children: "",
};

export default KtText;
