import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./carouselStyles.css";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Stack, Box, Image, Text } from "@chakra-ui/react";

export default function Carousel() {
  const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

  return (
    <Stack width="100%" height="calc(100vh)" position={"relative"} id="Carousel" scrollBehavior={"smooth"}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000, // 2000ms = 2 seconds
          disableOnInteraction: false, // Continue autoplay even after user interaction
        }}
        loop={true}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="center" zIndex={"10"}>
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                width="100%"
                height="100%"
                objectFit="cover"
                fallbackSrc="https://via.placeholder.com/1280x720?text=Image+not+found"
                filter={"brightness(0.3)"}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="center" position={"absolute"} zIndex={"11"}>
        <Text color={"white"} fontWeight={"bold"} fontSize={{ base: "2xl", md: "5xl" }} margin={"auto"}>
          #RealisasikanIdeBisnismu
        </Text>
      </Box>
    </Stack>
  );
}
