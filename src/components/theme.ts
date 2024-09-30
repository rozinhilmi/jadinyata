import { extendTheme } from "@chakra-ui/react";
export const primaryColor = () => {
  return "rgb(246, 249, 255)";
};
export const secondaryColor = () => {
  return "white";
};

export const primaryBackgroundColor = () => {
  return "#fafdff";
};
export const secondaryBackgroundColor = () => {
  // return "#E6F0FF";
  return "rgba(224, 242, 254, 1)";
};

export const primaryTextColor = () => {
  return "#3182ce;";
};

export const secondaryTextColor = () => "#333333";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontSize: "18px",
      },
    },
  },
  colors: {
    green: {
      500: "#42AA58",
    },
    red: {
      500: "rgba(221, 114, 114, 1)",
    },
  },

  fontSizes: {
    xs: "14px",
    sm: "16px",
    md: "18px",
    lg: "20px",
    xl: "22px",
    "2xl": "28px",
    "3xl": "32px",
    "4xl": "40px",
    "5xl": "52px",
    "6xl": "68px",
  },
  components: {
    Button: {
      sizes: {
        md: {
          fontSize: "sm",
        },
      },
      defaultProps: {
        colorScheme: "green",
      },
    },
    Input: {
      defaultProps: {
        focusBorderColor: primaryColor(),
      },
    },
    Select: {
      defaultProps: {
        focusBorderColor: primaryColor(),
      },
    },
    Modal: {
      defaultProps: {
        size: "xl",
      },
    },
    Switch: {
      defaultProps: {
        colorScheme: "green",
      },
    },
  },
});
