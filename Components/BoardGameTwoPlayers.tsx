interface Iprops {
  player1: string;
  player2: string;
  waitingProp: string;
}

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider, gql, useMutation } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { useEffect, useState } from "react";
import Waiting from "../Components/Waiting";
import SmallCard from "./SmallCard";
import TallCard from "./TallCard";
import Users from "./Users";

const CREATE_GAME = gql`
  mutation createGame($name: String!) {
    createGame(name: $name) {
      name
    }
  }
`;

const wsLink = new WebSocketLink({
  uri: "ws://localhost:9000/subscriptions",
  options: {
    reconnect: true,
  },
});

const httpLink = new HttpLink({
  uri: "http://localhost:9000/graphql",
  credentials: "include",
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const BoardGameTwoPlayers = ({
  player1,
  player2,
  waitingProp,
}: Iprops): JSX.Element => {
  const [confirmedPlayer1, setConfirmedPlayer1] = useState();
  const [playerOneResponse, setPlayerOneResponse] = useState("");
  const [playerTwoResponse, setPlayerTwoResponse] = useState("");
  const [waiting, setWaiting] = useState(waitingProp === "true");
  const [game, setGame] = useState({});

  const [createGame, { data }] = useMutation(CREATE_GAME);

  useEffect(() => {
    if (!confirmedPlayer1) {
      createGame({ variables: { name: name } })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const cards = [
    { imgCard: "/Pierre.svg", colorCard: "bg-yellow-300", value: "pierre" },
    { imgCard: "/Feuille.svg", colorCard: "bg-yellow-300", value: "feuille" },
    { imgCard: "/Ciseau.svg", colorCard: "bg-yellow-300", value: "ciseaux" },
  ];

  const playerOne = {
    playerName: player1,
    img: "/Bear.svg",
    color: "bg-indigo-500",
  };
  const playerTwo = {
    playerName: player2,
    img: "/Alien.svg",
    color: "bg-green-500",
  };

  const setResponsePlayer1 = (value: string) => {
    setPlayerOneResponse(value);
  };

  if (waiting) {
    return (
      <ApolloProvider client={client}>
        <Waiting player={player1} />;
      </ApolloProvider>
    );
  }

  return (
    <ApolloProvider client={client}>
      <div className="w-full h-full bg-gray-400">
        <Users {...playerTwo} />
        <div className="flex justify-around p-6">
          {playerOneResponse.length > 0 ? (
            <TallCard value={playerTwoResponse} />
          ) : (
            <TallCard value="" />
          )}
          <TallCard value={playerOneResponse} />
        </div>
        <div className="flex justify-around p-4">
          {cards.map((card) => {
            return (
              <SmallCard
                key={card.value}
                {...card}
                onClick={setResponsePlayer1}
              />
            );
          })}
        </div>
        <Users {...playerOne} />
      </div>
    </ApolloProvider>
  );
};

export default BoardGameTwoPlayers;
