import { styled } from "..";
import * as Dialog from "@radix-ui/react-dialog";

export const CartButtonContainer = styled(Dialog.Trigger, {
  marginLeft: "auto",
  backgroundColor: "$gray800",
  border: "none",
  borderRadius: 6,
  height: "3rem",
  width: "3rem",
  cursor: "pointer",
  position: "relative",

  span: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    height: "1.5rem",
    width: "1.5rem",
    color: "$white",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "50%",
    backgroundColor: "$green500",
    fontWeight: "bold",
    top: "-7px",
    right: "-7px",
  },
});
