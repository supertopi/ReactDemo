var siskot = ['Tiina', 'Tanja', 'Terhi']

//Container
var HelloContainer = React.createClass({

    render: function()
    {
        return (
            <div>
              <HelloWorld name={siskot[0] }/>
              <HelloWorld name={siskot[1] }/>
              <HelloWorld name={siskot[2] }/>
             </div>
            );
    }
})

// Henkilökohtainen tervehdys
var HelloWorld = React.createClass({

    getInitialState: function() {
        return {color: 'blue'};
    },
    handleClick: function() {
        this.setState({ color: 'red' });
    },
    render: function () {

        var divstyle = {
            color: this.state.color
        };

        return (
            <div onClick={this.handleClick} style={divstyle} > Hello {this.props.name} </div>
        )
    }

});

React.render(<HelloContainer/> , document.getElementById('topi'))

