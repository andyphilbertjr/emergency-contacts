import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
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
    const { contacts, searchField } = this.state;
    const filteredContacts = contacts.filter( person => {
      return person.name.toLowerCase().includes(searchField.toLowerCase())
    })
     return !contacts.length ?
       <h1>Loading</h1> :
          (
          <div className='tc'>
            <h1 className='f1'>Emergency Contacts</h1>
            <SearchBox searchChange={this.onSearchChangeHander}/> 
            <Scroll>
              <ErrorBoundry>
                <CardList contacts={filteredContacts} />
              </ErrorBoundry>
            </Scroll>
          </div>
          )
  } 
}
export default App