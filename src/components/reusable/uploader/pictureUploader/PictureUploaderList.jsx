import React, { useEffect, useState } from "react"
import PictureUploader from "./PictureUploader.jsx"

const PictureUploaderList = ({ setValue, classNames = "", defaultValues = [], locked }) => {
  const [images, setImages] = useState(defaultValues)

  const onChange = (imageList, index) => {
    if (imageList.length === 0) {
      setImages({ ...images, [index]: null })
      return
    }
    setImages({ ...images, [index]: imageList[0].data_url })
  }

  useEffect(() => {
    if (setValue) {
      setValue("images", images)
    }
  }, [images])

  return (
    <div className={`picture-uploader__wrapper ` + classNames}>
      <div className="picture-uploader__row">
        {new Array(4).fill("").map((_, index) => {
          return (
            <PictureUploader
              defaultValue={images[index]}
              parentSetterState={(imageList) => onChange(imageList, index)}
              locked={locked}
              key={index}
            />
          )
        })}
      </div>
      <div className="text-r">
        File type Image: <br />
        JPEG, BMP, PNG, GIF, TIFF, SVG, WEBP, JFIF
      </div>
    </div>
  )
}

export default PictureUploaderList
