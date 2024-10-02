import { Stack, Text } from "@chakra-ui/react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { secondaryBackgroundColor, secondaryTextColor } from "../../../components/theme";

const VideoPitching = () => {
  const videos = [
    "https://www.youtube.com/embed/TIAoLcLBmT4?si=dik_cZq6D1KnVsH6",
    "https://www.youtube.com/embed/4-xXcJ7bkC8?si=wCo74915ihPqCq3M",
    "https://www.youtube.com/embed/R-AD7fA10VU?si=ocvvSwqga_Mj_8tr",
    "https://www.youtube.com/embed/-grWpcpQ__k?si=flfCmxtXftlJtJFO",
  ];

  return (
    <Stack
      padding={{ base: "5", lg: "30px" }}
      marginTop={"30px"}
      marginX={{ base: "5px", md: "20px" }}
      paddingBottom={"30px"}
      borderRadius={"12px"}
      id="VideoPitching"
      backgroundColor={secondaryBackgroundColor()}
      boxShadow={"rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;"}
    >
      <Text as={"b"} fontSize={{ base: "2xl", lg: "3xl" }} color={"black"} textAlign={"center"} marginY={"20px"}>
        Video Pitching
      </Text>
      <Text color={secondaryTextColor()} textAlign={{ base: "justify", md: "center" }} maxWidth={"750px"} alignSelf={"center"}>
        Fitur utama di Jadinyata.id yang memungkinkan mahasiswa untuk membuat dan mengunggah video presentasi ide bisnis mereka. Dalam video ini,
        mahasiswa dapat menyajikan informasi penting seperti deskripsi ide, analisis pasar, model bisnis, strategi pemasaran, dan proyeksi keuangan.
      </Text>

      <Stack height={"300px"} marginTop={"30px"}>
        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
          style={{ paddingBottom: "40px", paddingLeft: "75px", paddingRight: "75px" }}
        >
          {videos.map((item: string, index: number) => (
            <SwiperSlide key={index} style={{ cursor: "pointer", position: "relative" }}>
              <iframe style={{ zIndex: 4, width: "100%", height: "100%" }} src={item} title="YouTube video player" allowFullScreen></iframe>
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
    </Stack>
  );
};

export default VideoPitching;
