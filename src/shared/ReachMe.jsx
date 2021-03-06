import React, { useState } from "react";
import Button from "./Button";
import wifi from "../assets/network-icon.png";
import { send } from "emailjs-com";

const ReachMe = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: ""
  });
  const serviceId = "service_ub6b22m";
  const templateId = "template_kkga2jv";
  const pubKey = "bZWDrA0RrWLv7nLvZ";

  const onSubmit = (e) => {
    // prevent form submission from refreshing page
    e.preventDefault();
    send(serviceId, templateId, toSend, pubKey)
      .then((res) => {
        console.log("Success!", res.text, res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div className="reachme__section">
      <h2 className="reachme__section__heading"> Reach Me </h2>
      <img width="50" src={wifi} alt="wifi-icon" />

      <form className="reachme__section__form" onSubmit={onSubmit}>
        <input
          type="text"
          name="from_name"
          placeholder="Name"
          value={toSend.from_name}
          onChange={handleChange}
          className="reachme__section__form__input"
        />
        <input
          type="text"
          name="to_name"
          placeholder="Email Address"
          value={toSend.to_name}
          onChange={handleChange}
          className="reachme__section__form__input"
        />
        <input
          type="textarea"
          name="message"
          placeholder="Message"
          value={toSend.message}
          onChange={handleChange}
          className="reachme__section__form__input-last"
        />
        {/* <input
          type="text"
          name="reply_to"
          placeholder="Your email"
          value={toSend.reply_to}
          onChange={handleChange}
        /> */}
        <Button type="submit" className="btn btn-form" text="Send Email!" />
      </form>
    </div>
  );
};

export default ReachMe;
