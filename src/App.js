import "./App.css";
import { useState } from "react";

function App() {
  const url = "url";
  const [orderId, setOrderId] = useState("");
  const [otp, setOtp] = useState("");

  async function generateOtp() {
    if (!orderId) {
      return alert("enter order id");
    }
    const req = await fetch(`${url}/api/otp/generate/${orderId}`).catch(
      (e) => e
    );
    const res = await req.json();
    console.log(alert(res.message));
  }

  async function verifyOtp() {
    if (!orderId) {
      return alert("enter order id");
    }
    if (!otp?.length) {
      return alert("enter otp");
    }
    const req = await fetch(`${url}/api/otp/verify/${orderId}`, {
      method: "POST",
      body: JSON.stringify({ otp }),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((e) => e);
    const res = await req.json();
    console.log(alert(res.message));
  }
  return (
    <div className="App">
      <h1>Authentication</h1>
      <div className="otp-1">
        Enter Order Id :
        <input
          className="order-id"
          type="text"
          placeholder="enter order id"
          onChange={(e) => setOrderId(e.target.value)}
        />
        <button onClick={generateOtp} className="btn-o">
          Generate otp
        </button>
      </div>
      <div className="otp-2">
        Enter Otp :
        <input
          className="otp-enter"
          type="text"
          placeholder="enter otp"
          onChange={(e) => setOtp(e.target.value)}
        />
      </div>
      <button className="btn" onClick={verifyOtp}>
        Submit
      </button>
    </div>
  );
}

export default App;
