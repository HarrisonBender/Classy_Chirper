import React, { Component } from 'react';
import ChirpContainer from './components/ChirpContainer';

// var time = new Date().getTime(); 
// var date = new Date(time);

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chirps: [],
            newUser: "",
            newMessage: "",
            newDate: ""

        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                chirps: [
                    {username: "Olivia", message: "Can't wait for the weekend!", date: "4:30 P.M. 07/09/2021"},
                    { username: "Harrison", message: "Me too!", date: "4:35 P.M. 07/09/2021"},
                    { username: "Michael", message: "TGIF lulz", date: "4:42 P.M. 07/09/2021"},
                ]
            })
        }, 500)
    }

    handleNewUserChange = (e) => this.setState({ newUser: e.target.value })
    handleNewMessageChange = (e) => this.setState({ newMessage: e.target.value })
    handleNewDateChange = (e) => this.setState({ newDate: e.target.value  });
    handleCreateNewChirp = () => {
        const newChirp = {
            username: this.state.newUser,
            message: this.state.newMessage,
            date: this.state.newDate
        };
        const chirpArr = [...this.state.chirps, newChirp]

        this.setState({ chirps: chirpArr});
    }

    render() {
        return (
            <>
            <div className="container" style={{background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)"}} >
                <div className="title" style={{ color:"whitesmoke", fontSize: "2rem", textAlign: "center", fontStyle: "oblique"   }}>Classy Chirper</div>
                <div class="mb-3" style={{width: "36rem"}}>
                    <label for="nameInpunt" class="form-label">Your Name</label>
                    <input
                        type="text"
                        class="form-control"
                        id="nameInpunt"
                        onChange={this.handleNewUserChange} />
                </div>
                <div class="mb-3" style={{width: "36rem"}}>
                    <label for="postInput" class="form-label">Your Post</label>
                    <textarea
                        class="form-control"
                        id="postInput"
                        rows="3"
                        onChange={this.handleNewMessageChange}></textarea>
                </div>
                <button
                    className="btn btn-dark mb-3"
                    type="submit"
                    onClick={this.handleCreateNewChirp}
                >Chirp</button>

                {this.state.chirps.slice(0).reverse().map(chirp => <ChirpContainer chirp={chirp} />)}
            </div>
            </>
        );
    }
}

export default App;
