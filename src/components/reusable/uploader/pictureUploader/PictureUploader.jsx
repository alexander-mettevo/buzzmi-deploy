import React, { useEffect, useState } from "react"
import ImageUploading from "react-images-uploading"
import MediaWrapper from "../../assets/mediaWrapper/MediaWrapper.jsx"

const PictureUploader = ({ parentSetterState, defaultValue, maxNumber = 1, locked }) => {
  const [images, setImages] = useState([])

  const onChange = (imageList) => {
    parentSetterState(imageList)
    setImages(imageList)
  }

  useEffect(() => {
    if (defaultValue) {
      setImages([
        {
          data_url: defaultValue,
        },
      ])
    }
  }, [])

  return (
    <div>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg", "gif", "png", "jpeg", "svg", "webp", "jfif"]}
      >
        {({ imageList, onImageUpload, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
          // write your building UI
          <div className="picture-uploader">
            <div className="upload__image-wrapper">
              <MediaWrapper
                iconSrc="/images/assets/forms/image.svg"
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                locked={locked}
                {...dragProps}
              />
              &nbsp;
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <button onClick={() => onImageUpdate(index)} className="picture-uploader__img" disabled={locked}>
                    <img src={image["data_url"]} alt="image upload icon" />
                  </button>
                  {!locked && (
                    <button className="picture-uploader__delete" onClick={() => onImageRemove(index)}>
                      <img src="/images/assets/delete.svg" alt="delete" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  )
}

export default PictureUploader
