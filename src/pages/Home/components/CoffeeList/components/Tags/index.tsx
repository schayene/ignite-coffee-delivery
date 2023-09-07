import { useState } from "react";
import { Tag, TagsContainer } from "./styles";

interface TagType {
  tag: string;
  active: boolean;
}

interface TagsProps {
  activeTags: (tags: string[]) => void;
}

export function Tags({ activeTags }: TagsProps) {
  const [tags, setTags] = useState<TagType[]>([
    { tag: "Tradicional", active: false },
    { tag: "Especial", active: false },
    { tag: "Com leite", active: false },
    { tag: "Alcoólico", active: false },
    { tag: "Gelado", active: false },
  ]);

  function toggleTag(tag: string) {
    const newTags = tags.map((stateTag) => {
      if (stateTag.tag === tag) {
        stateTag.active = !stateTag.active;
      }
      return stateTag;
    });

    setTags(newTags);
    activeTags(
      newTags.filter((newTag) => newTag.active).map((newTag) => newTag.tag)
    );
  }

  return (
    <TagsContainer>
      {tags.map((tag) => (
        <Tag
          key={tag.tag}
          active={tag.active}
          onClick={() => toggleTag(tag.tag)}
        >
          {tag.tag}
        </Tag>
      ))}
    </TagsContainer>
  );
}
