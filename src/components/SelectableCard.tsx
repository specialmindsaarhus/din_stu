"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import clsx from "clsx";

type Props = {
  title: string;
  description: string;
  outcome: string;
  category: string;
  selected: boolean;
  showSelected: boolean;
  onClick: () => void;
};

const categoryColors: Record<string, string> = {
  faglig: "bg-[#b9b48b]",
  social: "bg-[#9c6b5a]",
  personlig: "bg-[#4e6d82]",
  praktik: "bg-blue-300",
};

export default function SelectableCard({
  title,
  description,
  outcome,
  category,
  selected,
  showSelected,
  onClick,
}: Props) {
  return (
    <Card
      onClick={onClick}
      className={clsx(
        "cursor-pointer border-0 transition-all duration-200",
        categoryColors[category] || "bg-gray-200",
        selected && !showSelected
          ? "scale-105 ring-4 ring-black"
          : "hover:ring-2 hover:ring-gray-600",
        !selected && showSelected ? "hidden" : "mb-4",
      )}
    >
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-md">{description}</p>
      </CardContent>
      <CardContent>
        <p className="text-md">{outcome}</p>
      </CardContent>
    </Card>
  );
}
