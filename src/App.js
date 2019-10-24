import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      text:'',
      
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handletoggle=this.handletoggle.bind(this);
    this.handleDelete=this.handleDelete.bind(this);

  }

handleChange(e){
this.setState({
text:e.target.value
})
}
handleSubmit(e){
e.preventDefault();
if(!this.state.text.length){
  return;
 }
const newItem={
  text:this.state.text,
  id:Date.now()
 }
this.setState({
 items:this.state.items.concat(newItem),
 text:'' 
}); 
}

handletoggle(){

}

handleDelete(id){
const filteredItems = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({
      items: filteredItems,
    })
}

render(){
  return(<div className="content-pot">
          <h3 className="text-center">Prolines Todo List</h3>
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <div className="form-group mb-2">
             <input type="text" value={this.state.text} onChange={this.handleChange} className="form-control input-width" placeholder="Tasks" />
            </div>
            <button type="submit" className="btn btn-success mb-2">Add</button>
          </form>
          <div className="Result">
         <div className="form-check">
         <ul>
         {this.state.items.map(item => (
              <li key={item.id}>
          <input className="form-check-input" type="checkbox" value={item.id} onClick={this.handletoggle}/>
          <label className="form-check-label" htmlFor="defaultCheck1">
            {item.text}
          </label> 
          <button type="button" className="btn btn-danger mb-2 float-right" key={item.id} onClick={() => this.handleDelete(item.id)}>Delete</button>
              </li>
            ))}
          
         </ul>
         </div>
        </div>
        
  </div>);
  }
}

export default App;
