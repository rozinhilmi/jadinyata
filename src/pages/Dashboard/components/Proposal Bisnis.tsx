import { Stack, Text } from "@chakra-ui/react";
import { primaryTextColor, secondaryTextColor } from "../../../components/theme";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./videoPitching.css";
import { FreeMode, Pagination } from "swiper/modules";

const ProposalBisnis = () => {
  const proposals = [
    {
      title: "Aspek Pasar dalam Bisnis Plan",
      pdf: "/proposal/Aspek-Pasar-dalam-Bisnis-Plan.pdf",
      thumbnail: "/proposal/Aspek-Pasar-dalam-Bisnis-Plan-thumbnail.png",
    },
    {
      title: "Rencana Bisnis Panduan Lengkap",
      pdf: "/proposal/Rencana-Bisnis-Panduan-Lengkap.pdf",
      thumbnail: "/proposal/Rencana-Bisnis-Panduan-Lengkap-thumbnail.png",
    },
    {
      title: "Tips Pitching di Depan Investor",
      pdf: "/proposal/Tips-Pitching-di-Depan-Investor.pdf",
      thumbnail: "/proposal/Tips-Pitching-di-Depan-Investor-thumbnail.png",
    },
  ];

  return (
    <Stack
      padding={{ base: "5px", lg: "30px" }}
      marginTop={"30px"}
      paddingBottom={"30px"}
      marginX={"20px"}
      borderRadius={"12px"}
      id="ProposalBisnis"
      background={"radial-gradient(50% 50% at center center,rgba(10,149,231,.12) 0,rgba(10,149,231,0) 100%)"}
    >
      <Text as={"b"} fontSize={{ base: "2xl", lg: "3xl" }} color={primaryTextColor()} textAlign={"center"} marginTop={"40px"}>
        Proposal Bisnis
      </Text>
      <Text color={secondaryTextColor()} textAlign={"center"} maxWidth={"750px"} alignSelf={"center"} width={"100%"}>
        Saatnya mahasiswa untuk mengunggah dokumen proposal yang terperinci mengenai ide bisnis mereka. Proposal ini mencakup elemen-elemen seperti
        ringkasan eksekutif, analisis pasar, rencana operasional, dan strategi keuangan.
      </Text>

      <Stack height={"300px"} marginTop={"10px"}>
        <Swiper
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          style={{ paddingBottom: "40px" }}
        >
          {proposals.map((proposal, index) => (
            <SwiperSlide key={index} style={{ backgroundColor: "transparent" }}>
              <a href={proposal.pdf} target="_blank" rel="noopener noreferrer" style={{ cursor: "pointer" }}>
                <img
                  src={`${proposal.thumbnail}`} // Assuming you have images named after the title
                  alt={proposal.thumbnail}
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
    </Stack>
  );
};

export default ProposalBisnis;
