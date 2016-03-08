/**
 * Created by soul on 08/03/2016.
 */

/* var APP=React.createClass({
    render:function(){
        return <div className="alert-text">Hello {this.props.name}</div>
    }
}) */

var APP=React.createClass({
    render:function(){
        return <div style={{color:'red',backgroundColor:'black'}}>Hello {this.props.name}</div>
    }
})

ReactDOM.render(<APP name="World" />,document.body)