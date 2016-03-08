
# 初识

```
var APP=React.createClass({
    render:function(){
        return <div className='alert-text'>Hello {this.props.name}</div>
    }
})

ReactDOM.render(<APP name="World" />,document.body)
```

这段代码中首先我们可以看到React定义组件的方式是用一个函数来创建的.其中传递的是个对象字面量.
在对象字面量中,最重要的一个属性就是render 它返回了需要渲染的组件.并且是需要用一个函数来包裹返回的.

# JSX
因为是JSX语法,那么可以在JSX中使用HTML语法了.这里有一篇[JSX语法教程](https://segmentfault.com/a/1190000004470135#articleHeader9)

> 自定义出的组件标签名，React 的 JSX 里约定分别使用首字母大、小写来区分本地组件的类和 HTML 标签。render渲染时，会把大写的组件名定义为自定义组件，把小写的组件名定义为HTML自带的标签名进行渲染。


# 获值

我们在reder中写了一个{this.props.name},那么我们在渲染的时候却写上了一个name="World",然后输出的是 hello world那么很明显 this.props指向的就是这个虚拟的DOM组件 this.props.name意思也很明显了

# 样式与style

上述我们用了一个className而不用class,原因就是,在ES6中class为一个保留字,所以我们得用className来设置样式.当然还有一个设置样式的方法,那就是style

```
var APP=React.createClass({
    render:function(){
        return <div style={{color:'red',backgroundColor:'black'}}>Hello {this.props.name}</div>
    }
})

ReactDOM.render(<APP name="World" />,document.body)
```

首先 在JSX中 加引号则认为是字符串 加{}则认为是变量,并且在写样式的时候有-号得用驼峰式写法. 而声明style的时候是需要传递一个对象的 上面的写法等同于下面的写法

```
var APP=React.createClass({
    render:function(){
        var styleObj={
            color:'red',
            backgroundColor:'black'
        }
        return <div style={styleObj}>Hello {this.props.name}</div>
    }
})
```