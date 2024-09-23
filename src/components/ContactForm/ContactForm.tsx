import React, { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";
import toast, { Toaster } from "react-hot-toast";
import playAudio from "../../utils/helpers/playAudio";

export default function ContactForm() {
  const form = useRef<any>(null);
  const input1 = useRef(null),
    input2 = useRef(null),
    input3 = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    {
      /* toast.success(
      state.language === "english" ? "Nachricht abgeschickt!" : "Message sent!",
      {
        position: "top-left",
        style: {
          border: state.darkmode ? "2px solid hsla(0,0%,51.4%,.16)" : "1px solid #ebebeb",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.225)",
          borderRadius: "14px",
          fontFamily: "Inter",
          color: state.darkmode ? "white" : "#1d1d1f",
          fontSize: "14px",
          backgroundColor: state.darkmode ? "#141414" : ""
        },
      } 
    ); */
    }

    emailjs
      .sendForm(
        "service_86bzfe9",
        "template_49nz1ih",
        form.current,
        "kQZ-nxxKbc_syZcW1"
      )
      .then(
        (result: any) => {
          console.log(result.text);
        },
        (error: any) => {
          console.log(error.text);
        }
      );

    // clear fields after submitting message
    let fields = document.getElementsByClassName("field");
    let field1 = fields[0] as HTMLInputElement,
      field2 = fields[1] as HTMLInputElement,
      field3 = fields[2] as HTMLTextAreaElement;
    field1.value = "";
    field2.value = "";
    field3.value = "";
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className={`contact-socials-container light-card light-shadow`}
    >
      <div className="input-container">
        <input
          ref={input1}
          className={`field data light-field`}
          type="text"
          name="user_name"
          placeholder=""
          required
        />
        <input
          ref={input2}
          className={`field data light-field`}
          type="email"
          name="user_email"
          placeholder=""
          required
        />
      </div>
      <textarea
        ref={input3}
        name="message"
        placeholder=""
        className={`field data light-field`}
        required
      />
      <input
        type="submit"
        value=""
        className="submit"
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      />
    </form>
  );
}
