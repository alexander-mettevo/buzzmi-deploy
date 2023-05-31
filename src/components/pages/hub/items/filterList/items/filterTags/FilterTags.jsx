import React, {useState} from 'react';
import Badge from "../../../../../../reusable/badge/Badge.jsx";


const FilterTags = ({tags}) => {
  const [selectedTags, setSelectedTags] = useState([])

  const onTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag))
      //TODO code for removing tag from url or another logic

    } else {
      setSelectedTags([...selectedTags, tag])
      //TODO code for adding tag to url or another logic

    }
  }

  return (
    <div className='badge__row'>
      {tags?.length > 0 && tags.map((tag, index) => (
        <button  key={index} onClick={() => onTagClick(tag)}>
          <Badge type={tag} active={selectedTags.includes(tag)}/>
        </button>))}
    </div>
  );
};

export default FilterTags;