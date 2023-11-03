import { Text, SimpleGrid, Button } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import React from "react";

interface Props {
  gameQuery: GameQuery;
  searchText: string;
}

const GameGrid = ({ gameQuery, searchText }: Props) => {
  const {
    data: games,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {games?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.length === 0
              ? `No Results Found for "${searchText}"`
              : page.results.map((game) => (
                  <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                  </GameCardContainer>
                ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </>
  );
};

export default GameGrid;
