var TestClickComponent=React.createClass({displayName: "TestClickComponent",

    render:function(){
        return (
            React.createElement("div", null, 
                React.createElement("button", {onClick: this.handleClick}, "显示|隐藏 "), React.createElement("span", {ref: "tip"}, "测试点击")
            )
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

var TestInputComponent=React.createClass({displayName: "TestInputComponent",
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
            React.createElement("div", null, 
                React.createElement("input", {type: "text", onChange: this.changeHandler}), " ", React.createElement("span", null, this.state.inputContent)
            )
        )
    }
});

//渲染只能放一个组件
ReactDOM.render(
    React.createElement("div", null, 
        React.createElement(TestClickComponent, null), 
        React.createElement("br", null), React.createElement("br", null), React.createElement("br", null), 
        React.createElement(TestInputComponent, null)
    ),
    document.getElementById("container"))