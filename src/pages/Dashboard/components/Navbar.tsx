import { useEffect, useState } from "react";
import { Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { primaryTextColor, secondaryColor } from "../../../components/theme";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check which section is currently in view
      const sections = ["About", "VideoPitching", "ProposalBisnis", "NegoDiSini"];
      let foundSection = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100 && window.scrollY < element.offsetTop + element.offsetHeight) {
          foundSection = section;
          break;
        }
      }

      setActiveSection(foundSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <HStack
        height="1.7cm"
        paddingX={{ base: "10px", md: "40px" }}
        width="100%"
        maxW="1440px"
        // backgroundColor={scrolled ? "rgba(255, 255, 255, 0.1)" : "transparent"}
        backgroundColor={scrolled ? "white" : "transparent"}
        backdropFilter={"blur(50px)"}
        justify="space-between"
        className="navbar"
        position="fixed"
        zIndex="20"
        boxShadow={scrolled ? "rgba(0, 0, 0, 0.16) 0px 1px 4px" : "none"}
        fontSize="14px"
        transition="background-color 0.3s ease, box-shadow 0.3s ease"
      >
        <Image objectFit={"contain"} width={"200px"} src="/logo-vertical.png" />

        <HStack gap="15px" display={{ base: "none", lg: "flex" }}>
          {["About", "VideoPitching", "ProposalBisnis", "NegoDiSini"].map((section) => (
            <a href={`#${section}`} key={section}>
              <Text
                color={activeSection === section ? "rgb(49, 130, 206)" : primaryTextColor()}
                fontWeight={activeSection === section ? "bold" : "normal"}
                _hover={{ color: "rgb(49, 130, 206)" }}
                cursor="pointer"
                fontSize={"md"}
              >
                {section.replace(/([A-Z])/g, " $1").trim()}
              </Text>
            </a>
          ))}
          <a href="#footer">
            <Button colorScheme="blue">Hubungi Kami</Button>
          </a>
        </HStack>

        <Button variant="solid" colorScheme="blue" display={{ base: "flex", lg: "none" }} onClick={() => setShowSidebar(true)}>
          <GiHamburgerMenu />
        </Button>
      </HStack>

      <Stack
        transform={!showSidebar ? "translateX(100%)" : "translateX(0%)"}
        transition="all 0.5s"
        display={{ base: "flex", lg: "none" }}
        paddingX={{ base: "10px", lg: "40px" }}
        paddingY="20px"
        width="100%"
        height="100vh"
        maxW="1440px"
        backgroundColor={secondaryColor()}
        position="fixed"
        zIndex="21"
      >
        <HStack justifyContent="flex-end">
          <Button variant="outline" colorScheme="blue" display={{ base: "flex", lg: "none" }} onClick={() => setShowSidebar(false)}>
            <IoMdClose />
          </Button>
        </HStack>

        <Stack gap="10px" my="30px">
          {["About", "VideoPitching", "ProposalBisnis", "NegoDiSini"].map((section) => (
            <Button
              key={section}
              variant={activeSection === section ? "solid" : "outline"}
              colorScheme="blue"
              onClick={() => {
                setShowSidebar(false);
                window.location.href = `#${section}`;
              }}
            >
              {section.replace(/([A-Z])/g, " $1").trim()}
            </Button>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default Navbar;
