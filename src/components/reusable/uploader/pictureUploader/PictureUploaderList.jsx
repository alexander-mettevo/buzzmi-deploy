import React, { useEffect, useState } from "react"
import PictureUploader from "./PictureUploader.jsx"

const PictureUploaderList = ({ setValue, classNames = "", defaultValues = [] }) => {
  const [images, setImages] = useState(defaultValues)

  const onChange = (imageList, index) => {
    if (imageList.length === 0) {
      setImages({ ...images, [index]: null })
      return
    }
    setImages({ ...images, [index]: imageList[0].data_url })
  }

  useEffect(() => {
    setValue("images", images)
  }, [images])

  return (
    <div className={`picture-uploader__wrapper ` + classNames}>
      <div className="picture-uploader__row">
        <PictureUploader defaultValue={images[0]} parentSetterState={(imageList) => onChange(imageList, 0)} />
        <PictureUploader defaultValue={images[1]} parentSetterState={(imageList) => onChange(imageList, 1)} />
        <PictureUploader defaultValue={images[2]} parentSetterState={(imageList) => onChange(imageList, 2)} />
        <PictureUploader defaultValue={images[3]} parentSetterState={(imageList) => onChange(imageList, 3)} />
      </div>
      <div className="text-r">
        File type Image: <br />
        JPEG, BMP, PNG, GIF, TIFF, SVG, WEBP, JFIF
      </div>
    </div>
  )
}

export default PictureUploaderList
