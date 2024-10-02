import { HStack, Stack, Text } from "@chakra-ui/react";
import { primaryTextColor, secondaryTextColor } from "../../../components/theme";

const About = () => {
  return (
    <Stack
      padding={{ base: "5px", lg: "30px" }}
      marginTop={"30px"}
      marginX={"20px"}
      borderRadius={"12px"}
      minHeight={{ base: "85vh", lg: "700px" }}
      id="TentangKami"
      background={"radial-gradient(50% 50% at center center,rgba(10,149,231,.12) 0,rgba(10,149,231,0) 100%)"}
    >
      <Text as={"b"} fontSize={{ base: "2xl", lg: "3xl" }} color={primaryTextColor()} textAlign={"center"} marginTop={"40px"}>
        Tentang Kami
      </Text>

      <Stack gap={"80px"} my={"30px"}>
        <HStack
          justifyContent={"space-between"}
          flexDirection={{
            base: "column",
            lg: "row",
          }}
          gap={"30px"}
        >
          <Stack
            width={{ base: "100%", xl: "50%" }}
            alignSelf={{
              base: "center",
              // md: "flex-start",
              lg: "flex-start",
            }}
          >
            <Stack zIndex={"1"} borderRadius={"5px"} bottom={"2cm"} left={"2cm"} width={"100%"}>
              <iframe
                height={"300px"}
                src="https://www.youtube.com/embed/TIAoLcLBmT4?si=dik_cZq6D1KnVsH6"
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            </Stack>
          </Stack>
          <Stack width={{ base: "100%", xl: "50%" }} gap={"20px"} alignSelf={"center"}>
            <Text color={secondaryTextColor()} textAlign={"justify"}>
              Jadinyata.id merupakan platform inovatif yang dirancang khusus untuk mahasiswa yang ingin mengembangkan ide bisnis mereka dan
              menghubungkannya dengan calon investor. Sebagai bagian dari mata kuliah komunikasi dan negosiasi bisnis, Jadinyata.id memberikan
              kesempatan unik bagi mahasiswa untuk membuat video presentasi yang menggambarkan ide bisnis mereka secara mendalam, serta memberikan
              peluang pendanaan. Tidak hanya itu, Jadinyata.id juga terdapat fitur feedback & rating sehingga Investor dapat memberikan umpan balik
              dan penilaian terhadap video presentasi, yang membantu mahasiswa memperbaiki dan mengembangkan ide mereka.
            </Text>
            <Text
              color={secondaryTextColor()}
              textAlign={"justify"}
              // textAlign={{
              //   base: "start",
              //   md: "end",
              // }}
            >
              Kami berkomitmen untuk mempercepat proses inovasi dan wirausaha dengan menyediakan jembatan antara ide kreatif mahasiswa dan dukungan
              finansial dari investor. Jadinyata.id bertujuan untuk menciptakan ekosistem yang mendukung pertumbuhan ide bisnis baru dan memperkuat
              keterampilan komunikasi serta negosiasi di kalangan mahasiswa.
            </Text>
          </Stack>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default About;
