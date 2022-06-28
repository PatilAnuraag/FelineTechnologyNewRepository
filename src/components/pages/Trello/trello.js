import Board from "react-trello";
import backgroundImg from "../../../images/bricks.jpeg";

export default function Trello() {
  const data = {
    lanes: [
      {
        id: "lane1",
        title: "Planned Tasks",
        label: "2/2",
        cards: [
          {
            id: "Card1",
            title: "Write Blog",
            description: "Can AI make memes",
            label: "30 mins",
            draggable: true,
          },
          {
            id: "Card2",
            title: "Pay Rent",
            description: "Transfer via NEFT",
            label: "5 mins",
            metadata: { sha: "be312a1" },
          },
        ],
      },
      {
        id: "lane2",
        title: "Completed",
        label: "0/0",
        cards: [],
      },
    ],
  };

  return (
    <Board
      data={data}
      draggable
      style={{
        height: "100vh",
        padding: "2em",
        backgroundImage: `url(${backgroundImg})`,
      }}
      laneStyle={{ marginLeft: "1em", marginRight: "1em", paddingLeft: "1.5em", width: "20em"}}
      cardStyle={{width: "12em", height: "8em", paddingTop: "2em" }}
    />
  );
}
