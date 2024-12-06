"use client";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { Card } from "primereact/card";
import { InputTextarea } from "primereact/inputtextarea";
import { Divider } from "primereact/divider";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("Phone:", phone);
    setName("");
    setEmail("");
    setMessage("");
    setPhone("");
  };

  return (
    <Card title="Contacto" className="w-full md:w-8 mx-3 p-2 md:p-5 shadow-5">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 flex flex-column justify-content-center"
      >
        <div className="p-field w-full mt-5">
          <FloatLabel>
            <InputText
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full"
            />
            <label htmlFor="name">Nombre</label>
          </FloatLabel>
        </div>

        <div className="p-field w-full my-5">
          <FloatLabel>
            <InputText
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
            <label htmlFor="email">Email</label>
          </FloatLabel>
        </div>

        <div className="p-field w-full mb-5">
          <FloatLabel>
            <InputText
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full"
            />
            <label htmlFor="phone">Teléfono</label>
          </FloatLabel>
        </div>

        <div className="w-full">
          <InputTextarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            cols={30}
            placeholder="Mensaje"
            className="w-full"
          />
        </div>

        <Button type="submit" label="Enviar" color="primary" />
      </form>

      <Divider />

      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold mb-2">
          Contáctanos en redes sociales
        </h3>
        <div className="flex justify-content-center space-x-4 pt-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 mx-1"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 mx-1"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800 mx-1"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold mb-2">
            Llama o envía un mensaje
          </h3>
          <a className="text-gray-600 no-underline" href="tel:3572691470">
            Teléfono: 3572691470
          </a>
        </div>
      </div>
    </Card>
  );
}
