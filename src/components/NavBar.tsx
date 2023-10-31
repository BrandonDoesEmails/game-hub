import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/Logo/logo.webp";
import ColorModeSwtich from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={Logo} boxSize="60px" />
      <ColorModeSwtich />
    </HStack>
  );
};

export default NavBar;
