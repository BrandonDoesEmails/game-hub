import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/Logo/logo.webp";
import ColorModeSwtich from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={Logo} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwtich />
    </HStack>
  );
};

export default NavBar;
