import { Tag, TagsContainer } from "./styles";

export function Tags() {
  const tags: string[] = [
    "Tradicional",
    "Especial",
    "Com leite",
    "Alcoólico",
    "Gelado",
  ];

  return (
    <TagsContainer>
      {tags.map((tag) => (
        <Tag>{tag}</Tag>
      ))}
    </TagsContainer>
  );
}
