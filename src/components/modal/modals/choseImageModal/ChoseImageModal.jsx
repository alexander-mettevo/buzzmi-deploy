import React, {useEffect, useState} from 'react';
import SearchInput from "../../../reusable/form/items/inputs/SearchInput.jsx";
import PrimaryButton from "../../../reusable/btns/buttons/PrimaryButton.jsx";
import style from './chose-image.module.scss';
import UploadField from "./UploadField.jsx";
import useSetParenComponentProps from "../../../../hooks/useSetParenComponentProps.js";
import {useDispatch} from "react-redux";
import {closeModal} from "../../../../store/slices/modalSlice/modalSlice.js";

const items = [
  {
    src: '/images/moc/hub/1.png',
    alt: 'name1'
  },
  {
    src: '/images/moc/hub/2.png',
    alt: 'name1'
  },
  {
    src: '/images/moc/hub/3.png',
    alt: 'name1'
  },
  {
    src: '/images/moc/hub/4.png',
    alt: 'name1'
  },
  {
    src: '/images/moc/hub/5.png',
    alt: 'name1'
  },
  {
    src: '/images/moc/hub/1.png',
    alt: 'name1'
  },
  {
    src: '/images/moc/hub/2.png',
    alt: 'name1'
  },
  {
    src: '/images/moc/hub/3.png',
    alt: 'name1'
  },
  {
    src: '/images/moc/hub/4.png',
    alt: 'name1'
  },
  {
    src: '/images/moc/hub/5.png',
    alt: 'name1'
  },
  {
    src: '/images/moc/hub/1.png',
    alt: 'name1'
  },
  {
    src: '/images/moc/hub/2.png',
    alt: 'name1'
  },
  {
    src: '/images/moc/hub/3.png',
    alt: 'name1'
  },
  {
    src: '/images/moc/hub/4.png',
    alt: 'name1'
  },
  {
    src: '/images/moc/hub/5.png',
    alt: 'name1'
  },
  {
    src: '/images/moc/hub/1.png',
    alt: 'name1'
  },
  {
    src: '/images/moc/hub/2.png',
    alt: 'name1'
  },
  {
    src: '/images/moc/hub/3.png',
    alt: 'name1'
  },
  {
    src: '/images/moc/hub/4.png',
    alt: 'name1'
  },
  {
    src: '/images/moc/hub/5.png',
    alt: 'name1'
  },
]


const ChoseImageModal = () => {
  const dispatch = useDispatch();
  const setProps = useSetParenComponentProps();


  const onChange = (e) => {
    const {value} = e.target;
    setProps('ChoseImage', {image: value})
  }

  const save = (e) => {
    e.preventDefault();
    dispatch(closeModal())
  }

  return (
    <div className={style['chose-image']}>
      <div className='h4 text-center other-services__title'>
        Choose cover image
      </div>
      <UploadField/>
      <SearchInput/>
      <form className={`row g-21 ${style['chose-image__content']}`}>
        {items.map((creator, index) => (
          <label className='col-3' key={index}>
            <input
              type="radio"
              name='image'
              value={creator.src}
              onChange={onChange}
            />
            <div className={style['chose-image__img']}>
              <img src={creator.src} alt={creator.alt} className='img-fluid'/>
            </div>
          </label>
        ))}
      </form>
      <div className={style['chose-image__button']}>
        <PrimaryButton onClick={save} type="button">Save</PrimaryButton>
      </div>
    </div>
  );
};

export default ChoseImageModal;