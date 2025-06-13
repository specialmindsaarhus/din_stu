"use client";

import Link from "next/link";

import { useState } from "react";
import CardGrid from "../components/CardGrid";
import { Button } from "../components/ui/button";
import ToggleCardView from "~/components/ToggleCardView";

const allCards = [
  {
    id: "kodning",
    title: "Kodning",
    description: "Python, C#, web apps",
    category: "faglig",
  },
  {
    id: "dnd",
    title: "Dungeons & Dragons",
    description: "Socialt fællesskab",
    category: "social",
  },
  {
    id: "spiludvikling",
    title: "Spiludvikling",
    description: "2D og 3D spil med Unity",
    category: "faglig",
  },
  {
    id: "it-support",
    title: "IT Support",
    description: "Vedligeholdelse af udstyr og systemer",
    outcome: "Gode jobmuligheder",
    category: "support",
  },
  {
    id: "medieværktøjer",
    title: "Medieværktøjer",
    description: "Adobe-pakken, video og 3D-modellering",
    category: "medier",
  },
  {
    id: "fællesskaber",
    title: "Fællesskaber",
    description: "Brætspil, eSport og kreative klubber",
    category: "social",
  },
  {
    id: "praktisk-teknisk",
    title: "Praktisk Teknisk",
    description: "Webshops, sociale medier og billedbehandling",
    category: "praktisk",
  },
  {
    id: "hardware",
    title: "Hardware",
    description: "IT-genbrug og projekter som lamper og højtalere",
    category: "praktisk",
  },
  {
    id: "webdesign",
    title: "Webdesign",
    description: "Design og udvikling af hjemmesider",
    category: "faglig",
  },
  {
    id: "krea-klub",
    title: "Krea-klub",
    description: "Strik, tegning og kreativt fællesskab",
    category: "social",
  },
];

export default function HomePage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [showSelected, setShowSelected] = useState<boolean>(false);

  const toggleSelection = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
        </h1>
        <div className="grid grid-cols-1 gap-4 bg-amber-50 sm:grid-cols-2 md:gap-8">
          <CardGrid
            cards={allCards}
            selected={selected}
            toggleSelection={toggleSelection}
          />
        </div>
        <Button
          variant="outline"
          onClick={() => setShowSelected((prev) => !prev)}
        >
          Button
        </Button>
      </div>
    </main>
  );
}
