var siskot = ['Tiina', 'Tanja', 'Terhi'];
var currentSister  = 0;

//Container
var HelloContainer = React.createClass({

    render: function()
    {
        return (
            <div class='asd'>
              <HelloWorld />

             </div>
            );
    }
})

// Henkilökohtainen tervehdys
var HelloWorld = React.createClass({

    getInitialState: function() {
        return {color: 'blue', name: siskot[currentSister]};
    },
    handleClick: function () {
        var myColor;
        currentSister++;
        if (currentSister == siskot.length) currentSister = 0;
        if (this.state.color == 'blue') 
        {
            myColor = 'red'
        }
        else
        {
            myColor = 'blue'
        }
        this.setState({ color: myColor, name: siskot[currentSister] });

    },
    render: function () {

        var divstyle = {
            color: this.state.color
        };

        return (
            <div onClick={this.handleClick} style={divstyle} > Hello {this.state.name} </div>
        )
    }

});

React.render(<HelloContainer/> , document.getElementById('topi'))

