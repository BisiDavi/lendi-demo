import Image from "next/image";
import { character } from "../../types";

export default function Character({ character }: characterProps) {
  function colorText(text) {
    switch (text) {
      case "Dead": {
        return <h5 className="text-red-600">{text}</h5>;
      }
      case "Alive": {
        return <h5 className="text-green-600"> {text}</h5>;
      }
      default:
        return <h5 className="text-red-600"> {text}</h5>;
    }
  }
  return (
    <div className="character card rounded-lg items-center bg-gray-100 flex m-3">
      <Image
        src={character.image}
        alt={character.name}
        height={150}
        width={150}
      />
      <div className="text ml-2">
        <h3 className="font-bold text-xl">{character.name}</h3>
        <h5>{character.gender}</h5>
        <h5>{colorText(character.status)}</h5>
        <h5>{character.origin?.name}</h5>
      </div>
    </div>
  );
}

interface characterProps {
  character: character;
}

type textType = {
  text: "Alive" | "Dead";
};
