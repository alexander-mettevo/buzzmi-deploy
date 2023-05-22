import React, {useState} from 'react';
import Select from "react-select";

 const options = [
  {label: "Ukrainian", value: "ua"},
  {label: "Polsky", value: "pl"},
  {label: "Chinese", value: "cn"},
  {label: "English", value: "gb"},
  {label: "Indonesian", value: "id"},
  {label: "Hindi", value: "in"},
  {label: "Nigerian Pidgin", value: "ng"},
];

export const DropdownIndicator = () => {
  return (
    <i className="fa-solid fa-chevron-down select__arrow text-secondary"/>
  );
};

const MainLayoutFooterSelect = () => {
  const [selected, setSelected] = useState({label: "English", value: "gb"});

  const handleSelect = (selectedOption ) => {
    //TODO Handle change language

    setSelected(selectedOption);
  }

  return (
    <Select
      components={{DropdownIndicator}}
      options={options}
      defaultValue={selected}
      onChange={handleSelect}
      hasSelectAll={false}
      labelledBy="Select"
      disableSearch={true}
      classNamePrefix='footer-main'
    />
  );
};

export default MainLayoutFooterSelect;