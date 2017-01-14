import { connect } from 'react-redux'
import { toggleItem } from '../actions'
import ItemList from '../components/ItemList'

const getVisibleItems = (items, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return items
    case 'SHOW_COMPLETED':
      return items.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return items.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  items: getVisibleItems(state.items, state.visibilityFilter)
})

const mapDispatchToProps =  ({
  onItemClick: toggleItem
})

const VisibleItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)

export default VisibleItemList
