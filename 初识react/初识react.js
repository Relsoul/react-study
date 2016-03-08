/**
 * Created by soul on 08/03/2016.
 */

/* var APP=React.createClass({
    render:function(){
        return <div className="alert-text">Hello {this.props.name}</div>
    }
}) */

var APP=React.createClass({displayName: "APP",
    render:function(){
        return React.createElement("div", {style: {color:'red',backgroundColor:'black'}}, "Hello ", this.props.name)
    }
})

ReactDOM.render(React.createElement(APP, {name: "World"}),document.body)