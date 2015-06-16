
var Header = React.createClass({
    render: function () {
        return (
            <h1 className="title">{this.props.text}</h1>
        );
    }
});

var SearchBar = React.createClass({
    render: function () {
        return (
            <input type="search" />
        );
    }
});

var CarListItem = React.createClass({
    render: function () {
        return (
           <li>
                <a href={"#cars/" + this.props.car.id}>
                    {this.props.car.type} {this.props.car.make}
                </a>
           </li>
        );
    }
});

var CarList = React.createClass({
    render: function () {
        var items = this.props.cars.map(function (car) {
            return (
                <CarListItem key={car.id} car={car} />
            );
        });
        return (
            <ul>
                {items}
            </ul>
        );
    }
});

var HomePage = React.createClass({
    render: function () {
	    var cars = [
            {type: 'compact', make: 'ford'},
            {type: 'suv', make: 'chevy'},
            {type: 'luxury', make: 'ford'}
        ];
        return (
            <div>
                <Header text="Car Dealership"/>
                <SearchBar />
                <CarList cars={cars} />
            </div>
        );
    }
});

React.render(
    <HomePage />,
    document.body
);