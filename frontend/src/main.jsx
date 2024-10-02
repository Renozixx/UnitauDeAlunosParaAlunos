import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Cara, eu não ia colocar nenhum comentario dentro desse arquivo, porem acho necessario, já que eu apanhei muito para
// Achar a maneira correta de fazer isso, portanto gostaria de cravar aqui o que são rotas, feitas por meio do react
// router dom. Bem sendo direto as Rotas são um modelo de renderizar componentes react, e você pode estar se 
// Perguntando, qual a diferença entre rotas e links normais? 🤔🤔🤔 E eu te digo, a diferença é basicamente 
// Desempenho, usando rotas você previne o reload de arquivos estaticos, como os ASSETS, que são o CSS imagens, e isso
// Melhora muito o desempenho geral do app no Client-side.

// Como Fazer rotas?
// A partir do react-router-dom v6. as rotas são feitas como descrito abaixo.
// Caso você esteja criando uma pagina nova, basta criar um arquivo em pages conforme o modelo do "Modelo.jsx"
// E depois adicionar como uma rota de acordo com o modelo abaixo, ficou muito poluido esse arquivo, mas acho que 
// Falei o necessario apenas
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* Definindo o campo das rotas */}
      <Routes> {/* Definindo o "pai" das rotas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);