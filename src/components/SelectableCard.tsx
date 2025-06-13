"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import clsx from "clsx";

type Props = {
  title: string;
  description: string;
  outcome: string;
  category: string;
  selected: boolean;
  onClick: () => void;
};

const categoryColors: Record<string, string> = {
  faglig: "bg-yellow-300",
  social: "bg-red-300",
  praktisk: "bg-green-300",
  support: "bg-blue-300",
  medier: "bg-purple-300",
};

export default function SelectableCard({
  title,
  description,
  outcome,
  category,
  selected,
  onClick,
}: Props) {
  return (
    <Card
      onClick={onClick}
      className={clsx(
        "cursor-pointer border-2 transition-all duration-200",
        categoryColors[category] || "bg-gray-200",
        selected
          ? "scale-105 ring-4 ring-black"
          : "hover:ring-2 hover:ring-gray-600",
      )}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{description}</p>
      </CardContent>
      <CardContent>
        <p className="text-sm">{outcome}</p>
      </CardContent>
    </Card>
  );
}
