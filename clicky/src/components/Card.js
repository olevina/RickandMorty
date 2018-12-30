import React, { Component } from 'react';


class Card extends React.Component {
    state = {clicks:0};
    twoClicks = () => {
        this.setState((prevState) => ({
          clicks: prevState.clicks + 1
       
        }));
    
      };

    render(props) {
        return (


            <div style={{ margin: "1em" }} className="img-thumbnail" onClick = {() => this.props.onClick(this.props.id)} >
                <img width="300" src={this.props.avatar_url}>
                </img>
            </div>

        );
    }

}



export default Card;