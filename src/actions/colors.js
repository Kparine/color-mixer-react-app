
export const ADD_COLOR = 'ADD_COLOR'

export function addColor(newColor) {
  return {
    type: ADD_COLOR,
    payload: newColor
  }
}

export const SELECT_COLOR = 'SELECT_COLOR'

export function selectColor(idx) {
  return {
    type: SELECT_COLOR,
    payload: idx
  }
}


