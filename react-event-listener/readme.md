
# react中的事件绑定
```
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

```
在React绑定事件的方式跟在浏览器绑定差不多唯一的区别就是大小写要分明,react是驼峰式的.

# ref

首先要解释这个ref属性.总所周知这些仅仅是虚拟的dom,我们拿到的也是虚拟的dom那么如何获取一个真实的dom呢,就是通过ref这个属性打一个标记,然后这个标记会返回一个虚拟的DOM节点,但这个节点有个getDOMNode()方法 这样就能拿到真实的DOM节点.拿到真实的DOM节点后能做的事情就很多了.

再来写一个表单数据绑定的

# 再来一个
```
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
```
还记得前段时间说的么,this.props 表示那些一旦定义，就不再改变的特性，而 this.state 是会随着用户互动而产生变化的特性。因为当用户输入的时候旁边的span标签也会变动,所以得用this.state来保存属性.我们初始化属性后,通过this.setState来更改state状态,同时更新DOM节点