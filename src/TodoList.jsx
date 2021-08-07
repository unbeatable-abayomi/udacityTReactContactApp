import React, { Component } from 'react'

class TodoList extends Component {
  state ={
      newItem : '',
      list: []
  }
  addupdateInputs(key, value){
      this.setState({
        [key]: value
      })
  }

  addItem(){
      const newItem = {
          id : 1 + Math.random(),
          value : this.state.newItem.slice()
      }

      const list = [...this.state.list]
      list.push(newItem)
      this.setState({
          list,
          newItem:""
      })

  }
  deleteItem(id){
  const list = [...this.state.list];
  const updatedList = list.filter(i => i.id !== id);
  this.setState({
      list : updatedList
  })
  }

    render() {
        return (
            <div className ="todolist">
                 <h1>Second Todo List</h1>
                <input type='text' placeholder="Enter an Item" value={this.state.newItem} 
                onChange={e => this.addupdateInputs('newItem',e.target.value) }/>
               <button onClick={() => this.addItem()}>
                   Add An Item
               </button>

                <ul>
                    {
                          this.state.list.map(i =>{
                            return(
<li key={i.id}>
    {i.value}
    <button onClick={()=> this.deleteItem(i.id)}>
    x
</button>  
          
</li>
                  )
                        })
                    }
                </ul>

            </div>
        )
    }
}

export default TodoList;
