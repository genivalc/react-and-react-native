import { Container, Slogan, Title } from "./styles";
import backgroundImg from "../../../src/assets/background.png";
import { Button } from "../../components/Button";

export function SignI() {
  return (
    <Container source={backgroundImg}>
      <Title>Ignite Fleet</Title>

      <Slogan>Gestão de uso de veículos</Slogan>
      <Button title="Entrar com Google" />
    </Container>
  );
}
