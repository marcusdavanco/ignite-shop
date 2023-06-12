import { styled } from "..";

export const MinicartContainer = styled("div", {
  backgroundColor: "$gray800",
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  padding: "3rem",
  position: "fixed",
  right: 0,
  width: "30rem",
  zIndex: 2,

  header: {
    button: {
      cursor: "pointer",
      backgroundColor: "transparent",
      border: "none",
      position: "absolute",
      top: "1.75rem",
      right: "1.75rem",
    },

    h2: {
      color: "$gray100",
      lineHeight: 1.6,
      fontSize: "$lg",
      fontWeight: "bold",
      marginBottom: "2rem",
    },
  },

  section: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    flex: 1,

    table: {
      "tr:first-of-type": {
        "th, td": {
          color: "$gray100",
          lineHeight: 1.6,
          fontSize: "$sm",
          fontWeight: "normal",
        },
      },
      "tr:last-of-type": {
        "th, td": {
          color: "$gray100",
          lineHeight: 1.6,
          fontSize: "$md",
          fontWeight: "bold",
        },
      },
    },
  },

  footer: {
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginBottom: "3.5rem",

      "tr + tr": {
        marginTop: "0.5rem",
        fontSize: "$xl",

        th: {
          fontSize: "$md",
        },
      },

      th: {
        textAlign: "left",
        lineHeight: 1.6,
      },
      td: {
        textAlign: "right",
        lineHeight: 1.6,
      },
    },

    button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "4.25rem",
      backgroundColor: "$green500",
      color: "$white",
      borderRadius: 8,
      fontWeight: "bold",
      fontSize: "$md",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.2s",

      "&:not(:disabled):hover": {
        backgroundColor: "$green300",
      },
    },
  },
});

export const ProductContainer = styled("div", {
  display: "flex",
  gap: "1.25rem",

  div: {
    display: "flex",
    flexDirection: "column",
  },

  a: {
    color: "$gray300",
    textDecoration: "none",
    marginBottom: "0.25rem",
    lineHeight: 1.6,
  },

  span: {
    marginBottom: "auto",
    lineHeight: 1.6,
  },

  button: {
    cursor: "pointer",
    backgroundColor: "transparent",
    color: "$green500",
    border: "none",
    fontWeight: "bold",
    width: "fit-content",
    fontSize: "$sm",
    lineHeight: 1.6,

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("div", {
  height: "93px",
  minWidth: "100px",
  borderRadius: 8,
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
});
