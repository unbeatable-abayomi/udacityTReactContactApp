
//import logo from './logo.svg';
import './App.css';
import React, {Component}from 'react'
//import TodoList from './TodoList';
//mport Ninja from './Ninja';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';
import CreateContacts from './CreateContact';


class App extends Component {
  state={
    contacts : [
      // {
      //   "id": "karen",
      //   "name": "Karen Isgrigg",
      //   "handle": "karen_isgrigg",
      //   "avatarURL": "http://localhost:5001/karen.jpg"
      // },
      // {
      //   "id": "richard",
      //   "name": "Richard Kalehoff",
      //   "handle": "richardkalehoff",
      //   "avatarURL": "http://localhost:5001/richard.jpg"
      // },
      // {
      //   "id": "tyler",
      //   "name": "Tyler McGinnis",
      //   "handle": "tylermcginnis",
      //   "avatarURL": "http://localhost:5001/tyler.jpg"
      // }
    ],
    screen : 'create'
  }

  componentDidMount(){
    ContactsAPI.getAll()
    .then((contacts)=>{
      this.setState(()=>({
        contacts
      }))
    })
  }

  removeContact =(contact) =>{
this.setState((currentState)=>({
contacts : currentState.contacts.filter((c) => {
return c.id !== contact.id
})
}))

ContactsAPI.remove(contact);
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        {this.state.screen === 'list' && (
 <ListContacts contacts ={this.state.contacts}
 onDeleteContact={this.removeContact}
 />
        )}
       {this.state.screen === 'create'&&(
 <CreateContacts/>
       )}
       
      </div>
    )
  }
}



// class ContactList extends React.Component{
//   render(){
//     // const people = [
//     //   {name:"Tlyler"},
//     //   {name:"karen"},
//     //   {name:"Richard"}
//     // ]

//     const people = this.props.contacts
//     return(
//       <ol>
//         {people.map((person) =>{
//          return (
// <li key={person.name}>{person.name}</li>
//          ) 
//         })}
//       </ol>
//     )
//   }
//   }

  // function App() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //     {/* <Ninja Name="abayomi" age="230" color="blue"/>
  //     <Ninja Name="yomi" age="30" color="yello"/> */}
      
  // <ContactList contacts = {[ {name:"Tlyler"},{name:"karen"},{name:"Richard"}]}/>
  // <ContactList contacts = {[ {name:"Tlyler2"},{name:"karen2"},{name:"Richard2"}]}/>
  // <ContactList contacts = {[ {name:"Tlyler3"},{name:"karen3"},{name:"Richard3"}]}/>
  //       </header>
  //     </div>
  //   );
  // }
// class App extends Component {

//   state ={
//     newItem :"",
//     list :[]
//   }
//   updateInput(key, value){                                                                                                                                                                                                                                                                                                                                                                                                   
//       this.setState({
//         [key] : value
//       })
//   }
//   addItem(){
//     //create item with unqiue ID
//     const newItem = {
//       id : 1 + Math.random(),
//       value: this.state.newItem.slice()
//     }
//     //copy of current list of item
//     const list = [...this.state.list]
//     //add new item to list
//     list.push(newItem);

//     //update state with new list and reset newItem input
//     this.setState({
//       list,
//       newItem: ""
//     })
//   }
//   deleteItem(id){
// //copy current list of items
// const list = [...this.state.list]
// //filter item out being deleted
// const updatedList = list.filter(item => item.id !== id);
// this.setState({list: updatedList});
//   }
//   render() {
//     return (
//       <div className='App'>
//         <ContactList/>
//       Add an Item..
//       <br/>
//       <input type="text" placeholder="type an item..." 
//       value={this.state.newItem}
//       onChange={e => this.updateInput("newItem", e.target.value)}
//       />
//       {/* <button onClick={() => this.addItem()} value="Add item"/> */}
//       <button onClick={() => this.addItem()}  > 
//         Add
//       </button>
//       <br/>
//       <ul>
//         {this.state.list.map(item =>{
//           return(
//             <li key={item.id}>
//               {item.value}
//               <button onClick={()=>this.deleteItem(item.id)}>
//                 X
//               </button>
//             </li>
//           )
//         })}
//       </ul>
     
//       <TodoList/>
//       </div>
//     )
//   }
// }
 





export default App;

