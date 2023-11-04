import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/Logo/logo.webp";
import ColorModeSwtich from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={Logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwtich />
    </HStack>
  );
};

export default NavBar;
