import { Form } from "react-bootstrap";
import { Frame } from "../../../assets/Frame";
import { Logo } from "../../../assets/Logo";
import loginImg from '../../../assets/login.png'
import './login.css'
import { useState } from "react";
import Loading from "../../../Routes/Loading";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setErr] = useState("");

    let admin = 'admin@gmail.com';
    let user = 'user@gmail.com';

    function handleSubmit (e) {
        e.preventDefault();
        setLoading(true);
        if ((email === admin || email === user) && password >=6 ){
            
            setLoading(false);
            localStorage.setItem('bearer', email);
            window.location.pathname= '/static-project-x-frontend/dashboard/';
        }else if (email !== admin || email !== user || password < 6 ) {
            setLoading(false);
            setErr("wrong email or password");
        }
    }



    return(
           <div>
            <div className="container d-flex justify-content-between align-items-center mr-login-header">
                <div>
                    <Logo/>
                </div>
                <div>
                    <Frame/>
                    Asite Product System
                </div>
            </div>
            {loading && <Loading/>}
            <div className="container d-flex justify-content-center align-items-center mr-content">
                <div className="d-none d-lg-block w-50 h-100 p-3" data-aos="fade-right" data-aos-duration="1000">
                    <img src={loginImg} alt="" className="w-100 h-100 object-fit-contain animated"/>
                </div>
                <div className="w-lg-50 mr-login-form" data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="text-start">Welcome back, Yash </h1>
                    <p className="text-start mb-4">Welcome back! Please enter your details.</p>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 mr-custom-form" controlId="formBasicEmail">
                            <Form.Control
                            type="email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            required
                            placeholder="Enter email"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 mr-custom-form" controlId="formBasicPassword">
                            <Form.Control
                            type="password"
                            value={password}
                            minLength={6}
                            onChange={(e)=> setPassword(e.target.value)}
                            required
                            placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3 mr-check" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Terms & Conditions" required />
                        </Form.Group>
                        <div className="d-grid mr-login-btn">
                            <button type="submit" size="lg">
                                Log in
                            </button>
                        </div>
                        {error !== "" && <span className="error">{error}</span>}
                    </Form>
                </div>
            </div>
           </div>
    );
}