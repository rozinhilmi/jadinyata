import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import { secondaryBackgroundColor, secondaryTextColor } from "../../../components/theme";

const Footer = () => {
  return (
    <HStack
      paddingY={"30px"}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      marginTop={"40px"}
      // boxShadow={"rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;"}
      boxShadow={"rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;"}
      id="footer"
      backgroundColor={secondaryBackgroundColor()}
      flexDirection={{ base: "column", sm: "row" }}
      gap={"20px"}
    >
      <Image objectFit={"contain"} width={"100px"} src="/logo-horizontal.png" />
      <Stack>
        <Text fontWeight={"bold"}>Hubungi Kami :</Text>
        <Stack lineHeight={"15px"}>
          <Text color={secondaryTextColor()}>arief.budiman.kwu@upnjatim.ac.id</Text>
          <Text color={secondaryTextColor()}>+6282232871420</Text>
        </Stack>
      </Stack>
    </HStack>
  );
};

export default Footer;
