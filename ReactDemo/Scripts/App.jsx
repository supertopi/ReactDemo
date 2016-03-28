var naviItems = [{ title: 'Home', url: '/Data/home.json' },
                 { title: 'Shop', url: '/Data/shop.json' },
                 { title: 'About', url: '/Data/about.json' }];


var App = React.createClass({
    render: function () {
        return <Navigation items={ naviItems }/>
    }
});

React.render(<App/> , document.getElementById('main'));