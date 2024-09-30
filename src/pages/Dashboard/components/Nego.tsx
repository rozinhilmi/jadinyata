import { Stack, Text } from "@chakra-ui/react";
import { primaryTextColor, secondaryTextColor } from "../../../components/theme";

const Nego = () => {
  return (
    <Stack
      padding={{ base: "5px", lg: "30px" }}
      paddingY={"30px"}
      margin={{ base: "5px", md: "20px" }}
      borderRadius={"12px"}
      boxShadow={"rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;"}
      backgroundColor={"#F7FAFC"}
      minHeight={"350px"}
      id="NegoDiSini"
      // boxShadow={"rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;"}
    >
      <Text as={"b"} fontSize={{ base: "2xl", lg: "3xl" }} color={primaryTextColor()} textAlign={"center"} marginTop={"40px"}>
        Nego di Sini
      </Text>
      <Text color={secondaryTextColor()} textAlign={"center"} maxWidth={"750px"} alignSelf={"center"}>
        Fitur Nego Disini adalah platform komunikasi yang memungkinkan mahasiswa dan investor untuk bernegosiasi dan berdiskusi tentang berbagai aspek
        ide bisnis dan kemungkinan investasi. Fitur ini mendukung chat langsung, pengaturan pertemuan virtual, dan diskusi terkait kesepakatan
        investasi.
      </Text>
    </Stack>
  );
};

export default Nego;
