import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom"
import { addSignIn } from "../userAPI";


export const useAddSignIn = (redirectPath = '/home') => {
  const navigate = useNavigate();
  // 첫 번째 매개변수 (TData): 성공적인 mutation 요청 후 반환되는 데이터의 타입을 지정합니다. 이 경우 SignInResponse 타입은 API 요청이 성공했을 때 받을 응답의 구조를 정의합니다.
  //두 번째 매개변수 (TError): 오류 상황에서 반환되는 오류 객체의 타입을 지정합니다. 일반적으로 JavaScript의 Error 객체 또는 이를 확장한 사용자 정의 오류 타입을 사용합니다.
  //세 번째 매개변수 (TVariables): mutation 함수에 전달될 인자의 타입을 지정합니다. 이 예제에서는 IUserSignInInfo가 mutation 함수 addSignIn에 전달될 데이터의 타입을 정의합니다.
  return useMutation<ISignInResponse, Error, IUserSignInInfo>({
    mutationFn: (user: IUserSignInInfo) => addSignIn(user),
    onSuccess: data => {
      localStorage.setItem('username', data.username);
      localStorage.setItem('nickname', data.nickname);
      navigate(redirectPath)
    },
    onError: (error) => {
      console.error('Sign in failed:', error.message);
    }
  });
}