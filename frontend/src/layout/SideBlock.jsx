import React from "react";
import { Flex, Section } from "@radix-ui/themes";

const SideBlock = ({ children }) => {
  return (
    <Section flexBasis={"25%"} mt={"7"}>
      <Flex direction={"column"} gap={"3"}>
        {children}
      </Flex>
    </Section>
  );
};

export default SideBlock;
