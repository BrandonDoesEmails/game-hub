import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Spinner } from "@chakra-ui/spinner";
import { Box, Heading, Text } from "@chakra-ui/react";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <Box padding={5}>
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </Box>
  );
};

export default GameDetailPage;
