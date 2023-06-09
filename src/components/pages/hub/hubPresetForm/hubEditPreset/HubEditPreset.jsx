import { useEffect, useState } from "react"
import ValidationSchema from "../../../../../../form-validator/ValidationSchema.js"
import { useFormValidator } from "../../../../../../form-validator/hooks/index.js"
import HubPresetForm from "../HubPresetForm.jsx"
import { useParams, useNavigate } from "react-router-dom"

const validationSchema = new ValidationSchema({
  name: [{ rule: "required" }, { rule: "minLength", value: 3 }, { rule: "maxLength", value: 40 }],
})

const HubEditPreset = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [showInTask, setShowInTask] = useState(false)
  const [error, setError] = useState(null)

  //TODO example function to send request
  const sendRequest = async (formData) => {
    try {
      //TODO: send request
      console.log("formData", formData)
      navigate(`/hub/preset-preview/${id}`)
    } catch (e) {
      setError(e)
    }
  }

  const { register, handleSubmit, setValue, isValid, values } = useFormValidator(validationSchema, sendRequest, {
    defaultValues: {
      name: "test",
      coverImage: "https://cdn.pixabay.com/photo/2016/11/29/09/14/walking-1868652_1280.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias asperiores atque autem commodi consequatur cumque cupiditate deserunt doloribus ducimus ea earum eligendi eos error esse est et eum eveniet excepturi exercitationem expedita explicabo facere fugiat fugit hic id illum impedit in incidunt ipsa ipsum iste iure iusto labore laboriosam laborum laudantium libero magnam magni maiores maxime minima minus molestiae mollitia natus nemo neque nihil nisi nobis non nostrum nulla numquam obcaecati odio officia officiis omnis optio pariatur perferendis perspiciatis placeat porro possimus praesentium provident quae quam quas quia quibusdam quisquam quod quos ratione recusandae rem repellat repellendus reprehenderit repudiandae rerum saepe sapiente sequi similique sit soluta sunt suscipit tempora temporibus tenetur totam ullam unde ut vel veniam veritatis voluptas voluptate voluptatem voluptates voluptatibus voluptatum",
      images: [
        "https://cdn.pixabay.com/photo/2018/02/06/14/07/ease-3134828_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/11/29/06/15/adult-1867743_1280.jpg",
        "https://cdn.pixabay.com/photo/2014/04/24/20/38/bodybuilder-331670_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/11/21/17/33/body-1846668_1280.jpg",
      ],
      video:
        "https://cdn.pixabay.com/vimeo/395456375/32937.mp4?width=1280&hash=e538e5b790285eee9adde29d0031e344a4a9ed1b",
      audio: "/sounds/test-track.mp3",
      showInTask: true,
    },

    showErrorsOnSubmit: false,
  })

  useEffect(() => {
    setValue("showInTask", showInTask)
  }, [showInTask])

  return (
    <HubPresetForm
      error={error}
      handleSubmit={handleSubmit}
      setValue={setValue}
      values={values}
      isValid={isValid}
      register={register}
      title="Edit task"
    />
  )
}

export default HubEditPreset
