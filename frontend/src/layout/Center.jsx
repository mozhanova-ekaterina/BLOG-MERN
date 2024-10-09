import React from "react";
import { Section } from "@radix-ui/themes";

const Center = ({ children }) => {
  return (
    <Section flexGrow={"1"} flexBasis={"75%"}>
      {children}
    </Section>
  );
};

export default Center;
