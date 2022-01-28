import React, { useState } from "react";
import styled from "styled-components";
import { PALLETS } from "../../style/theme";
import { ReactTags } from "react-tag-input-custom-search";

const ProductInfoFilterTag = () => {
  const [Tags, setTags] = useState({
    tags: [
      { id: 1, name: "Apples" },
      { id: 2, name: "Pears" },
    ],
    suggestions: [
      { id: 3, name: "Bananas" },
      { id: 4, name: "Mangos" },
      { id: 5, name: "Lemons" },
      { id: 6, name: "Apricots" },
    ],
  });

  const handleDelete = (i) => {
    const tags = Tags.tags.slice(0);
    tags.splice(i, 1);
    setTags({ tags });
  };

  const handleAddition = (tag) => {
    const tags = [].concat(Tags.tags, tag);
    setTags({ tags });
  };

  return (
    <>
      <ReactTags
        tags={Tags.tags}
        suggestions={Tags.suggestions}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
      />
    </>
  );
};

export default ProductInfoFilterTag;
