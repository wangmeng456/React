import React, { Component } from 'react'
export default class Todoinput extends Component {
    constructor(){
        super();
        this.state = {
            val: ''
        }
    }
    handleInput = (e)=>{
        if(e.keyCode === 13){
            this.props.addTodo(this.state.val);
            this.setState({
                val:''
            })
        }
    }
    handleChange = (e)=>{
        this.setState({
            val:e.target.value
        })
    }
    render() {
        return (
            <div style={{width:'100%',background:'black',height:'40px',lineHeight:'40px'}}>
                <a style={{color:'#fff',fontSize:'18px',marginRight:'60px',marginLeft:'60px'}}>ToDoList</a>
                <input onChange={(e)=>this.handleChange(e)} value={this.state.val} onKeyDown={(e)=>this.handleInput(e)} placeholder={'添加ToDo'} type="text"/>
            </div>
        )
    }
}