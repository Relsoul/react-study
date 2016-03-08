var Hello=React.createClass({displayName: "Hello",
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
        return React.createElement("div", {style: {opacity:this.state.opacity,fontSize:this.state.fontSize}}, "Hello ", this.props.name)
    },
    componentWillMount:function(){
        alert("will")
    },
    componentDidMount:function(){
        alert("did");
        var _self=this;
        window.setTimeout(function(){
            _self.setState({
                opacity:0.5,
                fontSize:"44px"
            })
        })
        /*
        * or
        * window.setTimeout(function(){
         this.setState({
         opacity:0.5,
         fontSize:"44px"
         })
         }.bind(this))
        * */
    }
})
ReactDOM.render(React.createElement(Hello, {name: "world"}),document.body);