import './profileform.css'
import { useState ,useEffect } from "react";
import { Form , Button, Row, FormLabel } from "react-bootstrap";

export default function ProfileForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [value, setValue] = useState(""); 
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((data) => {
            const countryOptions = data.map((country) => ({
            code: country.cca2, 
            name: country.name.common 
            }));
            setCountries(countryOptions);
        });
    }, []);

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
      };
      const handleSubmit = (e) => {
        e.preventDefault(); 
        alert(`Name: ${name}, Email: ${email}, Phone-Number: ${value}, Password: ${password}`);
      };
    return (
      <Form onSubmit={handleSubmit}   className="si-form"> 
        <Row  gap={2}>
        <FormLabel as="h3" className="lbl">Edit Profile</FormLabel>  
        <Form.Group   className="input" controlId="name">
            <Form.Label>first name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Yash"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group   className="input" controlId="name">
            <Form.Label>last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ghori"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group   className="input" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="yghori@asite.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group> 
          <Form.Group   className="input" controlId="pasword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Change Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group> 
          </Row> 
          
          <Row gap={2}> 
             
          <Form.Group   className="input" controlId="Phone-Number">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="8023456789"
              value={value} 
              onChange={e => setValue(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="input" controlId="countrySelect">
            <Form.Label>Nationality</Form.Label>
            <Form.Control as="select" value={selectedCountry} onChange={handleCountryChange}>
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group   className="input" controlId="Designation">
            <Form.Label>Designation</Form.Label>
            <Form.Select >
            <option>UI Intern</option>
          </Form.Select>
          </Form.Group> 
          </Row>
          <Button variant="warning" type="submit">
            Save
          </Button>
      </Form>
    )
}