import { Component } from 'react'

export default class TodoList extends Component {
    state = {
        inputUser:'',
        groceryList: []
    }


    onChangeEvent(e) {
        this.setState({inputUser: e})
    }

    addItem(input){
        let listArray = this.state.groceryList;
        if(this.state.inputUser.trim() !== ''){
            listArray.push(input);
            this.setState({groceryList: listArray, inputUser: ''})
        }
    }

    onFormSubmit(e) {
        e.preventDefault()
    }


    crossWord(e){
        const li = e.target;
        li.classList.toggle('completed');
    }

    deleteItem(listArray){
        listArray = [];
        this.setState({groceryList: listArray})
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="heading">
                    <h1>Todo List</h1>
                </div>
                <div className="container">
                    <input className="inputField" type="text"
                    placeholder='What to do'
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.inputUser}/>
                    <button className="btn" onClick={() => this.addItem(this.state.inputUser)}>+</button>
                    <button className="delete" onClick={() => this.deleteItem()}><ion-icon name="trash-outline"></ion-icon></button>
                </div>
                    <ul className="list">
                    {this.state.groceryList.map((item, index) => (
                            <li className='listInside' onClick={this.crossWord} key={index}>{ item }
                            </li>
                    ))}
                    </ul>
                </form>
            </div>
        )
    }
}
