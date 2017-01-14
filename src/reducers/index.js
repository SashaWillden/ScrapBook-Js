import { combineReducers } from 'redux'
import items from './items'
import visibilityFilter from './visibilityFilter'

const scrapbookApp = combineReducers({
  items,
  visibilityFilter
})

export default scrapbookApp
