import React from 'react'
//import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import SearchBar from '../../components/searchbar/searchbar'

const Home = props => (
  <div>
    <h2>I'm Home</h2>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(Home)