import { styled } from "..";

export const MinicartContainer = styled("div", {
  backgroundColor: "$gray800",
  padding: "3rem",
  position: "fixed",
  height: "100vh",
  width: "30rem",
  right: 0,
  zIndex: 2,

  "& > button": {
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

  "section:first-of-type": {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },

  "section:last-of-type": {
    position: "absolute",
    bottom: "3rem",
    width: "384px",

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
  },

  span: {
    marginBottom: "0.5rem",
  },

  button: {
    cursor: "pointer",
    backgroundColor: "transparent",
    color: "$green500",
    border: "none",
    fontWeight: "bold",
    width: "fit-content",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("div", {
  minHeight: "100px",
  minWidth: "100px",
  borderRadius: 8,
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
});
