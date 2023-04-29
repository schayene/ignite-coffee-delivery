import { TagContainer } from "./styles";

export interface TagType {
  name: string;
}

export function Tag({ name }: TagType) {
  return <TagContainer>{name}</TagContainer>;
}
