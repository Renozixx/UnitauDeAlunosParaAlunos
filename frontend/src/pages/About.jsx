import React from "react";
import MyHeader from "../components/MyHeader";

const About = () => {
  return (
    <>
      <main className="h-full darmode-backgroundcolor">
        <MyHeader />
        <section>
          <div>
            <h2>Nosso proposito</h2>
            <p>
              O proposito por trás desse forum é o de fornecer um local para as
              pessoas tirarem duvidas sobre qualquer tópico, sem restrição, e se 
              por qualquer motivo ele quiser publicar algo para a comunidade ele 
              também pode! Não há limite dentro do "De Alunos para Alunos"
            </p>
          </div>
          <div>
            <h2>Nossa equipe</h2>
            {/* Mais para frente tranformar isso em um link para os nossos perfis dentro da nossa aplicação mesmo */}
            <p>
                Nossa equipe é composta pelos Alunos:
                <ul>
                    <li>Vinicius Ribeiro Renó</li>
                    <li>Henrique Dias</li>
                    <li>Vinicius Souza</li>
                    <li>Rafael dos Santos</li>
                    <li>Mateus de Moura</li>
                </ul>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
