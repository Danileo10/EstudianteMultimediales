import React from "react";
import '../assets/styles/Login.css';
import { Apiurl } from "../services/apirest";
import axios from "axios";


class Login extends React.Component {

    constructor(props){
        super(props);
    }

    state={
        form: {
            "email": "",
            "password": "",
        },
        error:true,
        errorMsg:"error de prueba"
    }


    manejadorSubmit = e => {
        e.preventDefault();
    }

    manejadorChange = async e => {
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
        console.log(this.state.form)
    }

    manejadorBoton=()=>{
        let url = Apiurl + "/auth/token/login";
        axios.post(url, this.state.form)
        .then(response =>{
            if(response.status === 200){
                localStorage.setItem("token", response.data.access)
                this.props.history.push("/home");
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <img
                                src="https://ucc.edu.co/bienestar-y-permanencia/generalidades/PublishingImages/Qu%C3%A9%20es%20bienestar%20UCC/iconos%20bienestar%20universitario-01.png"
                                id="icon"
                                alt="User Icon"
                            />
                        </div>
                        <form onSubmit={this.manejadorSubmit}>
                            <input
                                type="text"
                                id="email"
                                className="fadeIn second"
                                name="email"
                                placeholder="email"
                                onChange={this.manejadorChange}
                            />
                            <input
                                type="password"
                                id="password"
                                className="fadeIn third"
                                name="password"
                                placeholder="password"
                                onChange={this.manejadorChange}
                            />
                            <input
                                type="submit"
                                className="fadeIn fourth"
                                value="Log In"
                                onClick={this.manejadorBoton}
                            />
                        </form>

                        
                    </div>
                </div>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            </React.Fragment>
        );
    }
}
export default Login;

