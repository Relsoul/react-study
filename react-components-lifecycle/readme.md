
# reactComponents的三种阶段

1. Mounting:已插入真实的DOM
这里是reactDOM.render渲染完毕后的一种状态

2. Updating：正在被重新渲染
这是当更改了reactComponents组件的某些内容然后被重新render(渲染)

3. Unmounting：已移出真实 DOM
一个reactComponents组件从DOM结构中移除的这样一个过程

每一个状态react都提供了两种处理函数,will 函数在进入状态之前调用，did 函数在进入状态之后调用，三种状态共计五种处理函数。

- componentWillMount()
- componentDidMount()
- componentWillUpdate(object nextProps, object nextState)
- componentDidUpdate(object prevProps, object prevState)
- componentWillUnmount()

# this.state

```
var Hello=React.createClass({
    getInitialState:function(){
        alert("init")
        return{
            opacity:0.1,
            fontSize:"12px"
        }
    },
    render:function(){
        /*
        * 或者style={this.state}
        * */
        return <div style={{opacity:this.state.opacity,fontSize:this.state.fontSize}} >Hello {this.props.name}</div>
    },
    componentWillMount:function(){
        alert("will")
    },
    componentDidMount:function(){
        alert("did")
    }
})
ReactDOM.render(<Hello name="world"/>,document.body);
```

[方法API](http://reactjs.cn/react/docs/component-specs.html)

其中可以看到有一个方法是getInitialState,这个方法会组件挂载之前调用一次初始化state的值

## this.props与this.state
既然this.props和this.state是一样的效果.那么什么属性应该放props什么属性应该放state?
引用[阮一峰BLOG](http://www.ruanyifeng.com/blog/2015/03/react.html)一段话
> 由于 this.props 和 this.state 都用于描述组件的特性，可能会产生混淆。一个简单的区分方法是，this.props 表示那些一旦定义，就不再改变的特性，而 this.state 是会随着用户互动而产生变化的特性。


## 如何修改this.state?

那么我们在组件已经插入到真实的DOM中去的时候更改一下this.state的值
```
componentDidMount:function(){
    alert("did");
    var _self=this;
    window.setTimeout(function(){
        _self.setState({
            opacity:0.5,
            fontSize:"44px"
        })
    })
}
```
注意 这里使用了setState方法而不是直接对this.state进行修改.官方(中文)的文档则给出了一则警告
```
绝对不要直接改变 this.state，因为在之后调用 setState() 可能会替换掉你做的更改。把 this.state 当做不可变的。
```
其实意思就是如果你直接修改了this.state那么下一次setState不会根据你上次的this.state进行修改

这里的window.setTimeout中this指向的是window,但是在componentDidMount这些方法中this指向的是hello这个实例
在上述的setTimeout你也可以这样写
```
window.setTimeout(function(){
        this.setState({
            opacity:0.5,
            fontSize:"44px"
        })
    }.bind(this))
```
当修改了state那么组件就会进入Updating这个阶段