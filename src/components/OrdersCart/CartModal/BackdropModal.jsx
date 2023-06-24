import React from "react";
import { StyledBackdrop } from "../StylesCartModal/StyledBackdrop";

export const BackdropModal = ({ closeModal }) => {
  return <StyledBackdrop onClick={closeModal} />;
};


