function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  // set initial state
  let val: T = initial;
  // return tuple
  return [
    // return initial val
    () => val,
    // take new val
    (v: T) => {
      // set it to initial val var
      val = v;
    },
  ];
}

const [st1getter, st1setter] = simpleState(10);

console.log(st1getter());
console.log(st1setter(62));

console.log(st1getter());

const [st2getter, st2setter] = simpleState<string | null>(null);
console.log(st2getter());
st2setter("str");
console.log(st2getter());
interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}
function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));
  ranks.sort((a, b) => a.rank - b.rank);
  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  {
    name: "bulbasaur",
    hp: 20,
  },
  {
    name: "megasaur",
    hp: 50,
  },
];

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);
