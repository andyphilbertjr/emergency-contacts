import React from 'react';
import {connect} from 'react-redux'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'

import { setSearchField } from '../actions'

const mapStateToProps = state => {
  return{
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChangeHander: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
                  contacts: [],
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({contacts: users}))
  }


  render (){
    const { contacts } = this.state;
    const { searchField, onSearchChangeHander } = this.props
    const filteredContacts = contacts.filter( person => {
      return person.name.toLowerCase().includes(searchField.toLowerCase())
    })
     return !contacts.length ?
       <h1>Loading</h1> :
          (
          <div className='tc'>
            <h1 className='f1'>Emergency Contacts</h1>
            <SearchBox searchChange={onSearchChangeHander}/> 
            <Scroll>
              <ErrorBoundry>
                <CardList contacts={filteredContacts} />
              </ErrorBoundry>
            </Scroll>
          </div>
          )
  } 
}
export default connect(mapStateToProps, mapDispatchToProps)(App);