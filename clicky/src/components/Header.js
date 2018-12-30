import React, { Component } from 'react';


class Header extends React.Component {


    render(props) {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top justify-content-between" >
                <p><a className="navbar-brand" href="index.html">Clicky Game</a></p>
                <p className="navbar-brand">{this.props.cor}</p>
                <p className="navbar-brand">Points : {this.props.counter}</p>
            </nav>

        );
    }

}



export default Header;