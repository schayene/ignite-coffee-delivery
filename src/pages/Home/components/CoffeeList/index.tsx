import { CoffeeCard, CoffeeInterface } from "./components/CoffeeCard";
import { Tags } from "./components/Tags";
import { CoffeeListContainer, List, ListHeader } from "./styles";
import { useState } from "react";
import { coffees } from "./state";

export function CoffeeList() {
  const [filteredCoffees, setFilteredCoffees] =
    useState<CoffeeInterface[]>(coffees);

  function activeTags(tags: string[]) {
    setFilteredCoffees(
      !tags.length
        ? coffees
        : coffees.filter(
            (coffee) =>
              coffee.tags.filter((tag) => tags.includes(tag.name)).length
          )
    );
  }

  return (
    <CoffeeListContainer>
      <ListHeader>
        <h2>Nossos cafés</h2>
        <Tags activeTags={activeTags} />
      </ListHeader>

      <List>
        {filteredCoffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </List>
    </CoffeeListContainer>
  );
}
