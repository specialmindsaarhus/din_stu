"use client";

import SelectableCard from "./SelectableCard";

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
  toggleSelection: (id: string) => void;
};

export default function CardGrid({ cards, selected, toggleSelection }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 bg-amber-200 p-4 sm:grid-cols-2 md:grid-cols-3">
      {cards.map((card) => (
        <SelectableCard
          key={card.id}
          title={card.title}
          description={card.description}
          outcome={card.outcome}
          category={card.category}
          selected={selected.includes(card.id)}
          onClick={() => toggleSelection(card.id)}
        />
      ))}
    </div>
  );
}
