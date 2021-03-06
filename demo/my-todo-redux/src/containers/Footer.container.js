import { connect } from 'react-redux'
import Footer from '../components/Footer'
import {
  showAll,
  showActive,
  showCompleted
} from '../actions'

const mapDispatchToProps = dispatch => ({
  showAll: () => dispatch(showAll()),
  showActive: () => dispatch(showActive()),
  showCompleted: () => dispatch(showCompleted())
})

export default connect(
  null,
  mapDispatchToProps
)(Footer)














