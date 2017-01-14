import * as actions from './index'

describe('item actions', () => {
  it('addItem should create ADD_ITEM action', () => {
    expect(actions.addItem('Use Redux')).toEqual({
      type: 'ADD_ITEM',
      id: 0,
      text: 'Use Redux'
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

  it('toggleItem should create TOGGLE_ITEM action', () => {
    expect(actions.toggleItem(1)).toEqual({
      type: 'TOGGLE_ITEM',
      id: 1
    })
  })
})
