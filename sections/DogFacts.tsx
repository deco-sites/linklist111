import type { DogFacts } from "../loaders/DogFactsLoader.ts";

// Props type that will be configured in deco.cx's Admin
export interface Props {
  title: string;
  facts?: DogFacts;
}

export default function DogFactsSection(
  { title, facts }: Props,
) {
  return (
    <div class="p-4">
      <h1 class="font-bold">{title}</h1>
      <ul>
        {facts?.map((fact: string) => <li>{fact}</li>)}
      </ul>
    </div>
  );
}
