import {useDispatch} from "react-redux";
import {setParentComponent} from "../store/slices/modalSlice/modalSlice.js";

const useSetParenComponentProps = () => {
  const dispatch = useDispatch();

  return (name, props) => {
    dispatch(setParentComponent({
      name,
      props
    }))
  }
}

export default useSetParenComponentProps;