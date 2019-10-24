import React, { Component } from 'react'
import Todoing from './Todoing';
import Todoinput from './Todoinput';

export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo: localStorage.getItem('todolist')?localStorage.getItem('todolist').split(','):[],
            todo1: localStorage.getItem('todolist1')?localStorage.getItem('todolist1').split(','):[]
        }
    }
    addItem = (msg)=>{
        var todo = [this.state.todo];
        this.setState({
            todo: [...this.state.todo,msg]
        },()=>{
            localStorage.setItem('todolist',this.state.todo);
        })
    }
    delItem = (a)=>{
        var todo = [...this.state.todo];
        todo.splice(a,1);
        this.setState({
            todo
        },()=>{
            localStorage.setItem('todolist',this.state.todo);
        })
    }
    delItem1 = (a)=>{
        var todo1 = [...this.state.todo1];
        todo1.splice(a,1);
        this.setState({
            todo1
        },()=>{
            localStorage.setItem('todolist1',this.state.todo1);
        })
    }
    doingItem = (a)=>{
        var todo = [...this.state.todo];
        var todo1 = [this.state.todo1];
        var msg = todo[a];
        todo.splice(a,1);
        this.setState({
            todo,
            todo1: [...this.state.todo1,msg]
        },()=>{
            localStorage.setItem('todolist',this.state.todo);
            localStorage.setItem('todolist1',this.state.todo1);
        })
    }
    finishItem = (a)=>{
        var todo1 = [...this.state.todo1];
        var todo = [this.state.todo];
        var msg = todo1[a];
        todo1.splice(a,1);
        this.setState({
            todo1,
            todo: [...this.state.todo,msg]
        },()=>{
            localStorage.setItem('todolist1',this.state.todo1);
            localStorage.setItem('todolist',this.state.todo);
        })
    }
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing delTodo={this.delItem} todo={this.state.todo} todo1={this.state.todo1} doingTodo={this.doingItem} delTodo1={this.delItem1} finishTodo={this.finishItem}/>
            </div>
        )
    }
}