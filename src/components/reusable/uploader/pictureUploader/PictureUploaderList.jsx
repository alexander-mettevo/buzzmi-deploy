import React, {useEffect, useState} from 'react';
import PictureUploader from "./PictureUploader.jsx";

const PictureUploaderList = ({setValue}) => {
  const [images, setImages] = useState({
    0: '',
    1: '',
    2: '',
    3: '',
  });


  const onChange = (imageList, index) => {
    if (imageList.length === 0) {
      setImages({...images, [index]: ''});
      return;
    }
    setImages({...images, [index]: imageList[0]['data_url']});
  }


  useEffect(() => {
    setValue('images', images)
  }, [images])


  return (
    <div className='picture-uploader__wrapper'>
      <div className='picture-uploader__row'>
        <PictureUploader parentSetterState={(imageList) => onChange(imageList, 0)}/>
        <PictureUploader parentSetterState={(imageList) => onChange(imageList, 1)}/>
        <PictureUploader parentSetterState={(imageList) => onChange(imageList, 2)}/>
        <PictureUploader parentSetterState={(imageList) => onChange(imageList, 3)}/>
      </div>
      <div className='text-r'>
        File type Image: <br/>
        JPEG, BMP, PNG, GIF, TIFF, SVG, WEBP, JFIF
      </div>
    </div>
  );
};

export default PictureUploaderList;