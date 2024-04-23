import { useGetMatchData } from "@/apis/User/Queries/useGetMatchData";
import { useParams } from "react-router-dom"
import styled from "styled-components"


export default function MatchPage() {

const { id } = useParams();
const { data, isError } = useGetMatchData(id!);
console.log(data);

console.log(id);
if (isError) {
  return <Container>Error loading match details</Container>; // 에러 메시지를 화면에 표시
}
  return (
    <Container>
      {/* {
        data.map((item: IUserInfoProps) => (
          <div>{item.title}</div>
        ))
      } */}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100dvw;
  height: 100dvh;
  background-color: blue;
`