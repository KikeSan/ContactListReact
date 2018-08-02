import React, { Component } from 'react'
import './styles/index.scss'
// import Counter from './containers/Counter'
import Contacts from './containers/ContactList';
import ContactDetail from './containers/ContactDetail';

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Contacts />
        <ContactDetail />
      </div>
    )
  }
}