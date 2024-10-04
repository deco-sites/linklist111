export const API = new URL(`https://dogapi.dog/api/facts?number=1`)
export type DogFacts = string[];

export interface Props {
  /**
  * @description Number of dog facts.
  */
  numberOfFacts?: number;
}

export interface Returns {
  facts?: DogFacts;
  success?: boolean;
}

async function loader(
  { numberOfFacts = 1 }: Props,
  _req: Request,
): Promise<Returns> {
  API.searchParams.set('number', String(numberOfFacts ?? 1));
  const res = await fetch(API).then((r) => r.json());

  return res;
}

export default loader;