let nextItemId = 0
export const addItem = (text) => ({
  type: 'ADD_ITEM',
  id: nextItemId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleItem = (id) => ({
  type: 'TOGGLE_ITEM',
  id
})
