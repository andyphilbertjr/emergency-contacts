import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox.js';
import Scroll from './Scroll.js'
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
              contacts: [],
              searchField: ''
    }
    this.onSearchChangeHander = this.onSearchChangeHander.bind(this)
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({contacts: users}))
  }

  onSearchChangeHander(searchEvent){
    this.setState({
      searchField: searchEvent.target.value
    })
  }

  render (){
    const filteredContacts = this.state.contacts.filter( person => {
      return person.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
          <div className='tc'>
            <h1 className='f1'>Emergency Contacts</h1>
            <SearchBox searchChange={this.onSearchChangeHander}/> 
            <Scroll>
              <CardList contacts={filteredContacts} />
            </Scroll>
          </div>
        )
  }
}
export default App