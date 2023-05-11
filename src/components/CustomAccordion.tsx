import {
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  AccordionItemProps,
  Text,
} from '@chakra-ui/react';

interface Props {
  title: string;
  children: React.ReactNode;
}

function CustomAccordion({
  title,
  children,
  ...rest
}: AccordionItemProps & Props) {
  return (
    <AccordionItem {...rest}>
      <AccordionButton p='4'>
        <Text as='span' flex='1' textAlign='left' textTransform='uppercase'>
          {title}
        </Text>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>{children}</AccordionPanel>
    </AccordionItem>
  );
}

export default CustomAccordion;
