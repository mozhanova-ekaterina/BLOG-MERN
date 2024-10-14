import React from "react";
import { Section } from "@radix-ui/themes";

const Center = ({ children }) => {
  return (
    <Section flexGrow={"1"} py={{initial: '0', sm: '9'}}>
      {children}
    </Section>
  );
};

export default Center;
