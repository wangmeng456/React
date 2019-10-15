import React, { Component } from 'react'
import Todoing from './Todoing';
import Todoinput from './Todoinput';

export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo: [1,2,3]
        }


        // //arr、b里的对象是一个
        // var arr = [1,2,{a:100}];
        // //var b = [...arr];
        // var c = JSON.parse(JSON.stringify(arr));
        // //b[2].a = 200;//a是200
        // c[2].a = 200;//a是100
        // console.log(arr);

        // //对象的拷贝
        // var a = {a:100};
        // var b = {b:200};
        // // var o = Object.assign({},a,b);//把a和b整合，最终返回一个新的对象(有{})
        // var o = Object.assign({},a);//拷贝，对o操作
        // console.log(o === a);
        // console.log(o);

        // //遍历对象
        // var a = {a:100, b:200};
        // //Object.keys返回由属性名组成的一个数组
        // Object.keys(a).forEach((item)=>{
        //     console.log(item);
        //     console.log(a[item]);
        // })
        // //尽量不用for in
        // for(var item in a) {
        //     console.log(a);
        // }
        

    }
    addItem = (msg)=>{
        // this.state.todo.push(msg);
        // console.log(this.state.todo);

        this.setState({
            todo: [...this.state.todo,msg]
        })

        console.log(msg);
    }
    delItem = (a)=>{
        // this.state.todo.splice(a,1);//不要写
        //深拷贝\浅拷贝
        //状态（state）
        //1、不要直接改变、处理状态
        var todo = [...this.state.todo];
        todo.splice(a,1);
        //2、setState是异步的
        // this.setState((state,props)=>({todo:state.todo+1}))
        this.setState({
            todo
        })
        console.log(a);
    }
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing delTodo={this.delItem} todo={this.state.todo}/>
            </div>
        )
    }
}