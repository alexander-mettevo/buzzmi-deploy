import React, {useEffect, useRef} from 'react';
import Box from "../../../../reusable/cards/box/Box.jsx";
import {clearParentComponent, openModal} from "../../../../../store/slices/modalSlice/modalSlice.js";
import {useDispatch, useSelector} from "react-redux";
import MediaWrapper from "../../../../reusable/assets/mediaWrapper/MediaWrapper.jsx";

const parseImage = (image) => {
  if (typeof image === 'string') return image;
  if (typeof image === 'object') return image['data_url'];
}

const ChoseImage = ({setValue, values}) => {
  const dispatch = useDispatch();
  const {props, name} = useSelector(state => state.modal.parentComponent);

  const handleOtherServicesClick = () => {
    dispatch(openModal({
      modalName: 'ChoseImageModal',
      modalType: 'big',
    }));
  }

  const handleDelete = () => {
    dispatch(clearParentComponent());
    setValue('coverImage', '');
  }

  useEffect(() => {
    if (name === 'ChoseImage' && !!props) setValue('coverImage', props.image);
  }, [name]);


  return (
    <Box className='hub-form-box d-flex justify-content-between align-items-center'>
      <h4 className="h4">Choose cover image</h4>
      <div className="picture-uploader">
        {!values['coverImage'] && <MediaWrapper onClick={handleOtherServicesClick}/>}
        {
          !!values['coverImage'] && (
            <div className="image-item">
              <button onClick={handleOtherServicesClick} className='picture-uploader__img'>
                <img src={parseImage(values['coverImage'])} alt="image upload icon"/>
              </button>
              <button onClick={handleDelete} className='picture-uploader__delete'>
                <img src="/images/assets/delete.svg" alt="delete"/>
              </button>
            </div>
          )
        }

      </div>
    </Box>
  );
};

export default ChoseImage;