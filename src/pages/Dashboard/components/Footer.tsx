import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import { secondaryBackgroundColor } from "../../../components/theme";

const Footer = () => {
  return (
    <HStack
      height={"400px"}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      // boxShadow={"rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;"}
      boxShadow={"rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;"}
      id="footer"
      backgroundColor={secondaryBackgroundColor()}
      flexWrap={"wrap"}
    >
      <Image objectFit={"contain"} width={"200px"} src="/logo-horizontal.png" />
      <Stack>
        <Text>Hubungi Kami :</Text>
        <Text>arief.budiman.kwu@upnjatim.ac.id</Text>
        <Text>+6281-231-526-295</Text>
      </Stack>
    </HStack>
  );
};

export default Footer;
