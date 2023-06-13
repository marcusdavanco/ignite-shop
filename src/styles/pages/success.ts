import { styled } from "@stitches/react";

export const SuccessContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "gray300",
    maxWidth: 568,
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: 1.4,
  },

  a: {
    display: "block",
    marginTop: "5rem",
    fontSize: "$lg",
    color: "$green500",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },

  "section.multiple": {
    display: "flex",

    div: {
      height: "100%",
      width: "100%",
      maxWidth: 140,
      maxHeight: 140,
      borderRadius: "50%",
      boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.8)",
    },

    "div + div": {
      marginLeft: "-3rem",
    },

    "& + h1": {
      marginTop: "3rem",
    },
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 130,
  height: 145,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  marginTop: "4rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});
