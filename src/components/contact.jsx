import React from "react";
import github from "../assets/git.svg";
import email from "../assets/email.svg";
import linkedin from "../assets/linkedin.svg";
import whatsapp from "../assets/whatsapp.svg";

const Contact = () => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText("matheusforsteratunes@gmail.com")
      .then(() => {
        window.alert("Copiado!");
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
        window.alert("Falha ao copiar.");
      });
  };

  return (
    <div id="Contact" className="flex gap-5 pt-4">
      <img
        src={email}
        alt=""
        className="h-10 w-10 bg-sec rounded-lg"
        onClick={handleCopy}
      />
      <img
        src={whatsapp}
        alt=""
        className="h-10 w-10 bg-sec rounded-lg"
        onClick={() => window.open("https://wa.me/5511984258225")}
      />
      <img
        src={linkedin}
        alt=""
        className="h-10 w-10 bg-sec rounded-lg"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/matheus-forster-antunes-0b3ab82a3/"
          )
        }
      />
      <img
        src={github}
        alt=""
        className="h-10 w-10 bg-sec rounded-lg"
        onClick={() => window.open("https://github.com/GDNito")}
      />
    </div>
  );
};

export default Contact;
