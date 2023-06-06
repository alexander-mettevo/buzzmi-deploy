import React, {useEffect, useState} from 'react';
import Box from "../../../../../reusable/cards/box/Box.jsx";
import Input from "../../../../../reusable/form/items/inputs/Input.jsx";
import Badge from "../../../../../reusable/badge/Badge.jsx";

const AddName = ({title, register, placeholder, name, setValue}) => {
  const [popularNames, setPopularNames] = useState([]);
  const [selectedNames, setSelectedNames] = useState('')

  const onBadgeClick = (name) => {
    if (selectedNames.includes(name)) {
      setSelectedNames('')
      setValue('name', '')
    } else {
      setSelectedNames(name)
      setValue('name', name)
    }
  }

  useEffect(() => {
    const names = ['Meditate', 'Workout', 'Drink water', 'Dance', 'Sleep better']
    setPopularNames(names)
  }, [])

  return (
    <Box className='hub-form-box'>
      <h4 className='h4 mb-3 mb-lg-4'>{title}</h4>
      <div className='mb-3 mb-lg-4'>
        <Input placeholder={placeholder} name={name} register={register}/>
      </div>
      <h6 className="h6 mb-3 mb-lg-4">
        Popular names
      </h6>
      <div className='badge__row badge__row_in-block'>
        {popularNames?.length > 0 && popularNames.map((name, index) => (
          <Badge
            key={index}
            onClick={() => onBadgeClick(name)}
            title={name} type={'secondary'}
            active={selectedNames.includes(name)}/>
        ))}
      </div>
    </Box>
  );
};

export default AddName;