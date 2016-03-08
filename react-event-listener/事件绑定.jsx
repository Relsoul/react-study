var TestClickComponent=React.createClass({

    render:function(){
        return (
            <div>
                <button onClick={this.handleClick}>显示|隐藏 </button><span ref="tip">测试点击</span>
            </div>
        )
    },
    handleClick:function(event){
        event.stopPropagation();
        event.preventDefault();
        /*this.refs.tip;//非真实的DOM节点*/
        var tipE=this.refs.tip.getDOMNode();//拿到真实节点
        console.log(15,tipE)
        if(tipE.style.display==="none"){
            tipE.style.display="inline";
        }else{
            tipE.style.display="none";
        }

    },
});

var TestInputComponent=React.createClass({
    getInitialState:function(){
        return{
            inputContent:""
        }
    },
    changeHandler:function(event){
        event.stopPropagation();
        event.preventDefault();
        this.setState({
            inputContent:event.target.value
        })
    },
    render:function(){
        return (
            <div>
                <input type="text" onChange={this.changeHandler}/> <span>{this.state.inputContent}</span>
            </div>
        )
    }
});

//渲染只能放一个组件
ReactDOM.render(
    <div>
        <TestClickComponent/>
        <br/><br/><br/>
        <TestInputComponent/>
    </div>,
    document.getElementById("container"))