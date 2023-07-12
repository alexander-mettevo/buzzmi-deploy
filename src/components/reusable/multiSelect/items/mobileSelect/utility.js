export const computeTranslate = (props) => {
  const { options, value, itemHeight, columnHeight } = props
  let selectedIndex = options.indexOf(value)
  if (selectedIndex < 0) {
    console.warn('Warning: "' + props.name + '" doesn\'t contain an option of "' + value + '".')
    selectedIndex = 0
  }
  return {
    scrollerTranslate: columnHeight / 2 - itemHeight / 2 - selectedIndex * itemHeight,
    minTranslate: columnHeight / 2 - itemHeight * options.length + itemHeight / 2,
    maxTranslate: columnHeight / 2 - itemHeight / 2,
  }
}

export const handleTouchMove = (event, state, setState) => {
  event.preventDefault()
  const touchY = event.targetTouches[0].pageY
  if (!state.isMoving) {
    setState({
      ...state,
      isMoving: true,
    })
    return
  }

  let nextScrollerTranslate = state.startScrollerTranslate + touchY - state.startTouchY
  if (nextScrollerTranslate < state.minTranslate) {
    nextScrollerTranslate = state.minTranslate - Math.pow(state.minTranslate - nextScrollerTranslate, 0.8)
  } else if (nextScrollerTranslate > state.maxTranslate) {
    nextScrollerTranslate = state.maxTranslate + Math.pow(nextScrollerTranslate - state.maxTranslate, 0.8)
  }
  setState({
    ...state,
    scrollerTranslate: nextScrollerTranslate,
  })
}
