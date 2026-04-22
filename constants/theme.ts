export const Colors = {
  primary: "#3EF7B4",
  primaryTranslucent: "#3EF7B42C",
  secondary: "#50EAD3",
  secondaryTranslucent: "#50EAD32C",
  success: "#00FF90",
  error: "#FF0005",
  background: "#0B0E23",
  warning: "#FF6E00",
  text: "#FFFFFF",
  light: "#FFFFFF",
  lightTranslucent: "#ffffff2C",
  dark: "#0B0E23",
  purple: "#660FE9",

  bmiInsufficient: "#3498DB",
  bmiNormal: "#2ECC71",
  bmiRedundant: "#CC8D2E",
  bmiFatness: "#CC332E",
  bmiExtremeDegree: "#86241B"
};

export const Typography = {
  title: {
    fontSize: 28
  },
  subtitle: {
    fontSize: 24
  },
  key: {
    fontSize: 20
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24
  },
  small: {
    fontSize: 12,
    lineHeight: 20
  }
};

export const Spacing = {
  small: 8,
  medium: 16,
  large: 24,
  long: 32
};

export const BorderRadius = {
  small: 8,
  medium: 16,
  long: 32,
  full: "100%"
};

export const IconSize = {
  small: 24,
  medium: 32,
  big: 40,
  large: 48
};

export const Shadows = {
  primary: {
    boxShadow: `-2px 2px 10px ${Colors.primaryTranslucent}`,
  },
  light: {
    boxShadow: `-2px 2px 10px ${Colors.lightTranslucent}`
  }
};
