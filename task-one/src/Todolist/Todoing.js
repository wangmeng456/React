import React, { Component } from 'react'
// import PropTypes from 'prop-types';

export default class Todoing extends Component {
    constructor(){
        super();
        this.state = {
            isGoing: false,
            isGoing2: true
        }
    }
    render() {
        return (
            <div>
                <h1>正在进行----{this.props.todo.length}</h1>
                <ul style={{listStyle:'none'}}>
                    {
                        this.props.todo.map((item,idx)=><li key={idx}>
                            <input type="checkbox" checked={this.state.isGoing} onChange={()=>{this.props.doingTodo(idx)}}/>
                            {item}----
                            <button onClick={()=>{this.props.delTodo(idx)}}>删除</button>
                            </li>)
                    }
                </ul>
                <h1>已经完成----{this.props.todo1.length}</h1>
                <ul style={{listStyle:'none'}}>
                    {
                        this.props.todo1.map((item,idx)=><li key={idx}>
                        <input type="checkbox" checked={this.state.isGoing2} onChange={()=>{this.props.finishTodo(idx)}}/>
                        {item}----
                        <button onClick={()=>{this.props.delTodo1(idx)}}>删除</button>
                        </li>)
                    }
                </ul>
            </div>
            
        )
    }
}
// Todoing.protoTypes = {
//     todo: PropTypes.array
// }
// Todoing.defaultProps = {
//     todo: [2,3,4]
// }