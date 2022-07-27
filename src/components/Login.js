import React , {useState} from 'react'
import { Form, Input, Button, Checkbox } from "antd";
import { useNavigate } from 'react-router-dom';


const Login = () => {
   const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    let result;
    async function login() {
      let loginData = { email, password };
      result = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(loginData),
      });
      result = await result.json();
      setError(result);
      if(result.token){
              navigate('/homepage')
      }
    }
    console.log(error);
  return (
    <Form>
      <Form.Item>
        <Input
          placeholder="Email Address*"
          className="py-2 rounded"
          onChange={(e) => setEmail(e.target.value)}
          required
        ></Input>
      </Form.Item>
      <Form.Item name="password">
        <Input.Password
          placeholder="Password*"
          className="py-2 rounded"
          onChange={(e) => setPassword(e.target.value)}
        ></Input.Password>
      </Form.Item>
      {error.error ? <p className="text-danger">*{error.error}*</p> : ""}
      <Form.Item>
        <Button
          htmlType="submit"
          style={{ background: "#002F46" }}
          className="btn text-white px-5 py-2"
          block
          onClick={() => login()}
          size="large"
        >
          Login
        </Button>
      </Form.Item>
      <div className="d-flex items-center justify-content-between">
        <Form.Item>
          <Checkbox style={{ color: "#002F46", fontSize: "12px" }} required>
            Remember Password
          </Checkbox>
        </Form.Item>
        <a
          href=""
          className="text-decoration-none"
          style={{ color: "#002F46", fontSize: "12px" }}
        >
          Forget Password ?
        </a>
      </div>
    </Form>
  );
}

export default Login