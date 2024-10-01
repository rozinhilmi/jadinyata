import { Image, Stack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import VideoPitching from "./components/VideoPitching";
import ProposalBisnis from "./components/Proposal Bisnis";
import Footer from "./components/Footer";
import { primaryBackgroundColor } from "../../components/theme";
import Nego from "./components/Nego";
import { Link } from "react-router-dom";

// }
const index = () => {
  return (
    <Stack width={"100%"} justifyContent={"center"} alignItems={"center"} backgroundColor={primaryBackgroundColor()}>
      <Stack
        width={"100%"}
        maxWidth={"1440px"}
        position={"relative"}
        // minHeight={"80vh"}
        // height={"2500px"}
      >
        <Navbar />
        <Carousel />
        <About />
        <VideoPitching />
        <ProposalBisnis />
        <Nego />
        <Footer />
        <Link to={`https://wa.me/+6282232871420}?text=Selamat datang di Jadinyata.id, ada yang bisa kami bantu?`} target="_blank">
          <Image
            position={"fixed"}
            bottom={{ base: "10px", md: "25px" }}
            right={{ base: "10px", md: "25px" }}
            cursor={"pointer"}
            src="/whatsapp-icon.png"
            width={"60px"}
            height={"60px"}
            loading="lazy"
            zIndex={"20"}
          />
        </Link>
      </Stack>
    </Stack>
  );
};

export default index;
