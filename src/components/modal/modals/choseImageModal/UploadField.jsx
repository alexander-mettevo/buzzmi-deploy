import React from 'react';
import style from './chose-image.module.scss';
import ImageUploading from "react-images-uploading";
import useSetParenComponentProps from "../../../../hooks/useSetParenComponentProps.js";

const UploadField = () => {
  let image = []
  const setProps = useSetParenComponentProps();

  const onChange = (imageList, addUpdateIndex) => {
    image = imageList;
    setProps('ChoseImage', {image: image[0]});
  }

  return (
    <ImageUploading
      multiple
      value={image}
      onChange={onChange}
      maxNumber={1}
      dataURLKey="data_url"
      acceptType={["jpg", "gif", "png", "jpeg", "svg", "webp", "jfif"]}
    >
      {({
          onImageUpload,
          dragProps,
        }) => (
      <div
        className={style['chose-image__upload-field']}
        onClick={onImageUpload}
        {...dragProps}
      >
        <h4 className='h4 text-center'>Upload Your Image</h4>
      </div>
      )}

    </ImageUploading>
  );
};

export default UploadField;