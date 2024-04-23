import { useUpdateUserInfo } from "@/apis/User/Mutations/useUpdateUserInfo";
import { useGetUserInfo } from "@/apis/User/Queries/useGetUserInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

export default function LandingPage() {

const data = useGetUserInfo();
const updateUserInfoMutation = useUpdateUserInfo();
const [nickName, setNickName] = useState('');
const [playStyle, setPlayStyle] = useState('');
const navigate = useNavigate();
const userInfo = {
  nickName,
  playStyle
}
const handleSubmit = () => {
  updateUserInfoMutation.mutate(userInfo)
}
const handleDetail = (id: string) => {
  navigate(`/match/${id}`)
}

console.log(data);

  return(
    <Container>
      {
        data.map((item: IUserInfoProps) => (
          <div key={item._id}
          onClick={() => handleDetail(item._id)}
          >{item.title}</div>
        ))
      }
      <Input type="text" onChange={e => setNickName(e.target.value)}/>
      <Input type="text" onChange={e => setPlayStyle(e.target.value)}/>
      <button onClick={handleSubmit}>버튼</button>
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100dvw;
  height: 100dvh;
  background-color: green;
`;

const Input = styled.input`
  width: 200px;
  height: 200px;
`;