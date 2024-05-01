import { useMutation } from "@tanstack/react-query";
import { useAddSignIn } from "./useAddSignIn";
import { addUser } from "../userAPI";

export const useAddUser = () => {
  const addSignInMutation = useAddSignIn('/survey');
  return useMutation({
    mutationFn: (user: IUserInfo) => addUser(user),
    // 첫 번째 매개변수 (_): 이 매개변수는 mutationFn에서 반환된 데이터를 받습니다.
    // 즉, addUser 함수가 서버로부터 어떤 응답을 받았다면 그 응답 데이터가 이 위치에 전달됩니다. 
    // 두 번째 매개변수 (variables): 이 매개변수는 mutationFn에 실제로 전달된 인자, 즉 입력 데이터를 받습니다. 
    // 이 경우 addUser(user) 함수에 전달된 user 객체가 variables로 전달됩니다.
    onSuccess: (_, variables: IUserInfo) => {
      console.log("회원등록");
      addSignInMutation.mutate({
        username: variables.username,
        password: variables.password,
      });
    },
  });
};
