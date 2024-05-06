import { Container } from "@/components/Container/Container"
import styled from "styled-components"


export default function HomePage() {

  return (
    <Container>
      <Wrapper>
        <button>home</button>

      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100dvw;
  height: 100dvh;
  background-color: white;
`