/*
import React from 'react'

function Server() {

    // server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/enviar-email', (req, res) => {
  const { destinatario, assunto, mensagem } = req.body;

  // Configurar o transporte do Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'seu-email@gmail.com',
      pass: 'sua-senha-do-email',
    },
  });

  // Configurar o email
  const mailOptions = {
    from: 'seu-email@gmail.com',
    to: destinatario,
    subject: assunto,
    text: mensagem,
  };

  // Enviar o email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Erro ao enviar o e-mail');
    } else {
      console.log('Email enviado: ' + info.response);
      res.status(200).send('E-mail enviado com sucesso');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

  return (
    <div>Server</div>
  )
}

export default Server







// App.js
import React, { useState } from 'react';

const App = () => {
  const [destinatario, setDestinatario] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviarEmail = () => {
    fetch('http://localhost:3001/enviar-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ destinatario, assunto, mensagem }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Erro:', error));
  };

  return (
    <div>
      <label>
        Destinatário:
        <input type="email" value={destinatario} onChange={(e) => setDestinatario(e.target.value)} />
      </label>
      <br />
      <label>
        Assunto:
        <input type="text" value={assunto} onChange={(e) => setAssunto(e.target.value)} />
      </label>
      <br />
      <label>
        Mensagem:
        <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
      </label>
      <br />
      <button onClick={enviarEmail}>Enviar</button>
    </div>
  );
};

export default App;


*