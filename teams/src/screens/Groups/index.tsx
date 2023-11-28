import { Highlight } from "@components/Highlight";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight subtitle="neto" title="genival" />
      <GroupCard title="Galera do ignate" />
    </Container>
  );
}
