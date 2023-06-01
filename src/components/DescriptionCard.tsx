import { HStack, Heading, Icon, StackProps, Text } from "@chakra-ui/react";
import React, { ElementType } from "react";

interface DescriptionCardProps extends StackProps{
  icon: ElementType;
  desc: string;
}

export function DescriptionCard(props:DescriptionCardProps){
  const {icon, title, desc, ...rest} = props;
  return(
  <HStack {...rest}>
    <Icon as={icon}/>
    <Heading>{title}</Heading>
    <Text align="left">
      {desc}
    </Text> 
  </HStack>
  );
}