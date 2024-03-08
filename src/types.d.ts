declare type ImageContent = (props: {
  width?: number;
  height?: number;
}) => JSX.Element;

declare type PageElementProps = {
  dark: boolean;
  setDarkMode: (dark: boolean) => void;
};

declare type PageElement = (props: PageElementProps) => JSX.Element;
