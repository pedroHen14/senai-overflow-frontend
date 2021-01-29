import { Container, FormLogin, Body, Header, Button } from "./styles";
import Input from "../../components/Input";

function Login() {
  return (
    <Container>
      <FormLogin>
        <Header>
          <h1>Bem vindo ao Senai Overflow</h1>
          <h2>Para sua pergunta nós temos a resposta</h2>
        </Header>
        <Body>
          <Input id="email" label="E-mail" type="email" />
          <Input id="password" label="Senha" type="password" />
          <Button>Penetrar</Button>
          <a href="#">Ou clique aqui para se cadastrar</a>
        </Body>
      </FormLogin>
    </Container>
  );
}

export default Login;
