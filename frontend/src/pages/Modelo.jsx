import React, { useEffect, useState } from 'react'
import MyHeader from '../components/MyHeader';
// Esse modelo eu vou deixar mais para facilitar as coisas, nele eu vou deixar um molde para vocês entenderem as coisas
// Melhor, sobre estilizar e tailwind

// Vamos falar sobre os props, na hora de chamar esse componente, você pode enviar innformações para ele, isso quer 
// Dizer que por exemplos, se você quiser enviar propiedades para um componente react, você vai colocar um nome 
// E chamar ele, a maneira mais simples de explicar é:
// <Modelo props=[ "todos", "os" , "dados"] nome="Henrique" />
const Modelo = ({ props, nome }) => {
  const [Informacoes, setInformacoes] = useState([]);
  const [Username, setUsername] = useState("")
  const [Idade, setIdade] = useState(0)
  // O state é basicamente uma forma de fazer e manipular as variaveis que vão ser usadas para construir a sua pagina.
  // Isso que dizer que, você cria o nome da variavel que você quer dentro do modelo acima
  // const [nome_da_variavel, setNome_da_variavel] = useState(tipo_da_variavel)

  // Já o useEffect é mais confuso, ele basicamente serve para escutar coisas em paralelo a pagina, isso na pratica
  // Quer dizer você coloca dentro do useEffect aquelas funções que vão chamar a sua API, e/ou pegar dados externos
  // A sua pagina.
  useEffect(() => {
    PegarLetras()
  })
  
  const PegarLetras = () => {
    // Aqui ficaria o codigo para pegar dados externos.
  }

  // Aqui fica minha recomendação de você baixar a extensão do tailwind, ela ajuda MUITO.
  // "darkmode-backgroundcolor" é uma classe que guarda a cor que usamos para o body, enquanto o "h-screen" é uma
  // Classe do TailWind que faz com que seu componente preencha a tela inteira
  // A pagina que está melhor desenvolvida é a UserPage.jsx vale ir dar uma olhada lá
  return (
    <body className='darkmode-backgroundcolor h-screen'>
      <MyHeader />
      <main>
        <h1>As informações que você quer e etc</h1>
      </main>
    </body>
  )
}

export default Modelo