import React,{Component,Fragment} from 'react';

//类定义组件
export default class ShowTime extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        }
        //this.handleClick = this.handleClick.bind(this);
        console.log('constructor',this.props.word);
    }
    componentDidMount(){
        console.log('componentDidMount');
        setTimeout(() => {
            this.setState({
                time: new Date().toLocaleString()
            })
        },1000);
    }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('getsnapshot');
    }
    componentDidUpdate(){
        console.log('didupdate');
    }

    handleClick = (num,e) => {
        console.log(num,e);
        console.log('点击成功');
    }
    divClick(num,e){
        console.log(num,e);
    }

    render(){
        console.log('render');

        return (
            // 替代DOM结构，只是一个容器，不会出现在DOM结构中
            <Fragment>
                <div onClick={(ev)=>this.handleClick(1,ev)}>{this.state.time}</div>
                <div onClick={this.divClick.bind(this,3)}>hello{this.props.word}</div>
            </Fragment>
        );
    }
}

// //默认导出,只能导出一次
// export default ShowTime;

// //命名导出,导入和导出的名一致，可写多个export
// export {ShowTime};