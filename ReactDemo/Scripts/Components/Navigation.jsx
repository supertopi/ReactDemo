var Navigation = React.createClass({

    //Navigation owns an array of items which will be rendered as NaviItems
    propTypes: {
        items: React.PropTypes.array.isRequired,
    },

    //State consists of the currently selected navi item
    getInitialState: function () {
        return { selectedTab: this.props.items != null && this.props.items.length > 0 ? this.props.items[0] : null }
    },

    //NaviItem child onClicks are mapped to parents handleClick
    handleClick: function(title)
    {
        this.setState({ selectedTab: this.props.items.find( function(item) {
                return item.title == title;
            })
        });
        
    },

    render: function () {
        var selectedTab = this.state.selectedTab;
        var parentClickHandler = this.handleClick;

        //Get all navi items with map
        var naviItems = this.props.items.map(function (item, index) {
            return <NaviItem click={ parentClickHandler} title={item.title} selected={ item === selectedTab } />
        });

        return <div>
                   <ul>{naviItems}</ul> 
                   <Content url={ this.state.selectedTab != null ? this.state.selectedTab.url : null }/>
               </div>;
    }
});


var NaviItem = React.createClass({

    propTypes: {
        title: React.PropTypes.string.isRequired,
        selected: React.PropTypes.bool.isRequired,
        click: React.PropTypes.func.isRequired
    },

    statics:  { //TODO: define styles in separate file
        selectedStyle: function () {
            return {color: 'red'}
        },
        inactiveStyle: function () {
            return {color: 'black'}
        }
    },

    render: function () {
        return <li onClick={ this.props.click.bind(this, this.props.title)} style={ this.props.selected ? NaviItem.selectedStyle() : NaviItem.inactiveStyle() }>
                 {this.props.title}
               </li>
    }
});


var Content = React.createClass({

    getInitialState: function () {
        return { content: '' }
    },
    propTypes: {
        url: React.PropTypes.string,
    },
    componentDidMount: function () //Initial content, only once
    {
        this.getContent(this.props.url);
    },
    componentWillReceiveProps : function (newProps) { //When changing navi 
        this.getContent(newProps.url);
    },
    render: function () {
        return <p> {this.state.content} </p>
    },
    getContent: function ( url ) {
        if ( url != null) {
            this.serverRequest = function () {
                var oReq = new XMLHttpRequest();
                oReq.onload = function (e) {
                    this.setState({ content: e.target.response.payload });
                }.bind(this);
                oReq.open('GET', url, true);
                oReq.responseType = 'json';
                oReq.send();
            }.bind(this);

            this.serverRequest.call();
        }
    }
});
