"use client";

import SelectableCard from "./SelectableCard";
import clsx from "clsx";

type CardData = {
  id: string;
  title: string;
  description: string;
  outcome: string;
  category: string;
};

type Props = {
  cards: CardData[];
  selected: string[];
  showSelected: boolean;
  toggleSelection: (id: string) => void;
};

export default function CardGrid({
  cards,
  selected,
  showSelected,
  toggleSelection,
}: Props) {
  return (
    <div className="columns-1 gap-6 p-4 sm:columns-2 md:columns-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className={clsx(showSelected ? "mb-0" : "mb-6", "break-inside-avoid")}
        >
          <SelectableCard
            title={card.title}
            description={card.description}
            outcome={card.outcome}
            category={card.category}
            selected={selected.includes(card.id)}
            showSelected={showSelected}
            onClick={() => toggleSelection(card.id)}
          />
        </div>
      ))}
    </div>
  );
}
