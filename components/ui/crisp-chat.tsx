"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("78c0855b-cf4a-4475-9657-d86986775854");
    Crisp.setHideOnMobile(true);
  });

  return null;
}

export default CrispChat;
