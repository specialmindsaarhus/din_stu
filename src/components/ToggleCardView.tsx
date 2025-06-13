"use client";

import { useState } from "react";
import CardGrid from "./CardGrid";

type CardData = {
  id: string;
  title: string;
  description: string;
  category: string;
};

type Props = {
  cards: CardData[];
  selected: string[];
  toggleSelection: (id: string) => void;
};

export default function ToggleCardView({
  cards,
  selected,
  toggleSelection,
}: Props) {
  const [showSelected, setShowSelected] = useState<boolean>(false);

  const filteredCards = showSelected
    ? cards.filter((card) => selected.includes(card.id))
    : cards;

  return (
    <div className="space-y-4">
      <button
        onClick={() => setShowSelected((prev) => !prev)}
        className="rounded bg-black px-4 py-2 text-white transition hover:bg-gray-800"
      >
        {showSelected ? "Vis alle kort" : "Vis kun valgte kort"}
      </button>

      <CardGrid
        cards={filteredCards}
        selected={selected}
        toggleSelection={toggleSelection}
      />
    </div>
  );
}
