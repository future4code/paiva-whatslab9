import React from 'react';
import styled from 'styled-components'

const ContainerAreaMensagem = styled.div`
display: flex;
flex-direction: column;
margin: auto;
height: 100vh;
border: 1px solid;
box-sizing: border-box;
width: 45%;
`
const AreaMensagem = styled.div`
display: flex;
justify-content: flex-end;
flex-direction: column;
padding: 1rem;
flex-grow: 1;
`
const AreaInput = styled.div`
display: flex;
`
const InputMensagem = styled.input`
  flex-grow: 1;
`
const InputNome = styled.input`
  width: 100px;
`



class App extends React.Component {
  state = {
    mensagens: [],
    nome: "",
    mensagemUsuario:""
  }

  onChangeNome = (event) => { this.setState({nome: event.target.value})}
  onChangeMensagemUsuario = (event) => { this.setState({mensagemUsuario: event.target.value})}

  enviarMensagem = () => {
    const novaMensagem = {
      nome: this.state.nome,
      mensagem: this.state.mensagemUsuario
    }

    const todasMensagens = [...this.state.mensagens, novaMensagem]
    this.setState ({ mensagens: todasMensagens, mensagemUsuario:""})
  }

 

  render() {
    return (
      <ContainerAreaMensagem>
        <AreaMensagem>
         {this.state.mensagens.map((mensagem, index) => {
           return <p>
             <strong>{mensagem.nome}</strong>: {mensagem.mensagem}
           </p>
         })}
        </AreaMensagem>
        <AreaInput>
          <InputNome
            placeholder = {"nome"}
            value = {this.state.nome}
            onChange = {this.onChangeNome}
          />
          <InputMensagem
            placeholder = {"mensagem"}
            value = {this.state.mensagemUsuario}
            onChange = {this.onChangeMensagemUsuario}
          />
          <button onClick = {this.enviarMensagem}>
            Enviar
          </button>
        </AreaInput>
      </ContainerAreaMensagem>
    );
  }
}

export default App;