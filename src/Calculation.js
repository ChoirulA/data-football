import { Component } from "react";

class Header extends Component{
    render() {
        return(
            <div>
                <h5>Choose the better for you:)</h5>
            </div>
        );
    }
}

class Footer extends Component{
    render() {
        return(
            <div>
                <h1>Stay Cool Everytime</h1>
            </div>
        );
    }
}

class Contents extends Component{
    render() {
        return(
            <div>
                <span>Test Our Taste!</span>
            </div>
        );
    }
}

class Hitungan extends Component{
    constructor(props){
        super(props);
        this.state = {
            cok: 'Sweeter',
            harga: this.props.harga,
            jumlah: this.props.jumlah,
        };        
    }
    render() {
        var hasil = this.props.harga*this.props.jumlah;
        return(
            <div>
                <h6>{this.props.nama}</h6>
                <span>{this.props.harga}, {this.props.jumlah}</span>
                <br></br>                
                <span>Total : {hasil}</span>
            </div>
        );
    }
}

export {Header, Footer, Contents, Hitungan}