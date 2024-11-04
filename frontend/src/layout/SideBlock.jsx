import React from "react";
import { Flex, Section } from "@radix-ui/themes";

const SideBlock = ({ children }) => {
  return (
    <Section flexBasis={"25%"} py={{initial: '0', sm: '9'}}>
      <Flex direction={"column"} gap={"3"}>
        {children}
      </Flex>
    </Section>
  );
};

export default SideBlock;
