import * as S from "./SignUpPage.styles";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useAddUser } from "@/apis/User/Mutations/useAddUser";
import { useCheckUsername } from "@/apis/User/Mutations/useCheckUsername";
import { useNavigate } from "react-router-dom";

// yup을 이용한 유효성 검사 스키마
const schema = yup
  .object({
    username: yup.string().required("아이디는 필수 입력 사항입니다"),
    nickname: yup.string().required("닉네임 필수 입력 사항입니다"),
    password: yup
      .string()
      .required("비밀번호는 필수 입력 사항입니다")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,12}$/,
        "비밀번호는 8~12자리이며, 영문, 숫자, 특수문자를 포함해야 합니다"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), undefined], "비밀번호가 일치하지 않습니다"),
  })
  .required();

export default function SignUpPage() {
  const [usernameMessage, setUsernameMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const addUserMutation = useAddUser();
  const checkUsernameMutation = useCheckUsername();
  const [usernameAvailable, setUsernameAvailable] = useState(false);
  const navigate = useNavigate();
  // react-hook-form
  const {
    register,
    handleSubmit,
    watch, // 특정 인풋을 실시간으로 감시
    setError, 
    clearErrors,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange", // 입력 필드가 변경될 때마다 유효성 검사를 실행합니다.
  });

  const username = watch("username");

  // 아이디 값 변경되면 중복체크 성공 상태 초기화
  // onChange 의 event.target.value 와 useForm의 watch를 비교
  // 둘다 실시간 변경이지만 onChange는 DOM 이벤트가 발생하는 즉시 실행되지만, 
  // watch가 반환하는 값은 입력 이벤트가 react-hook-form의 상태를 업데이트하고, 리액트가 상태 변경을 반영하여 리렌더링 할 때까지의 사이클을 거친 후에 업데이트 됩니다
  const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = event.target.value;
    if (newUsername !== username) {
      setUsernameAvailable(false);
      setUsernameMessage('');
    }
  };

  
  
  const onSubmit = (data: IUserInfo) => {
    // 유효성 검사를 통과하지 못했거나 setError로 발생시킨 에러가 있거나,
    // 중복체크확인 상태가 True가 아니면 회원가입 요청 안되게
    if (!isValid || !usernameAvailable || Object.keys(errors).length > 0) {
      alert("잘못된 값을 입력하였습니다");
      return; 
    }
    // react-hook-form을 통해 form 제출 이벤트 발생할때 자동으로 받아오는 data, register로 등록한 변수명으로 받아옴
    const { username, nickname, password } = data;
    // 회원가입 react-query mutate 실행
    addUserMutation.mutate({ username, nickname, password})
    navigate('/survey')
  };

  const handleCheckUsername = async () => {
    if (!username) {
      setError('username', { type: 'manual', message: '아이디를 입력해주세요' });
      return
    }
    try {
      const response = await checkUsernameMutation.mutateAsync(username);
      if(response === 'success') {
        setUsernameAvailable(true);
        setUsernameMessage('사용 가능한 아이디입니다')
        clearErrors('username');
      } else if (response === 'failed') {
        setUsernameAvailable(false);
        setError('username', { type: 'manual', message: '이미 사용 중인 아이디입니다' });
      }
    } catch (error) {
      console.error(error);
      setUsernameAvailable(false);
      setError('username', { type: 'manual', message: '아이디 중복 확인 중 오류가 발생했습니다' });
    }
  };

  return (
    <S.Container>
      <S.SignInContainer>
        <S.SignInWrapper onSubmit={handleSubmit(onSubmit)}>
          <S.TitleText>PERFECT FOOTBALL</S.TitleText>
          <S.UserNameInputWrapper $focused={isFocused}>
            <S.UserNameInput
              {...register("username", { onChange: onUsernameChange })}
              placeholder="아이디"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            {errors.username && <p>{errors.username.message}</p>}
            {usernameMessage && <p>{usernameMessage}</p>}
            <S.DuplicateCheckButton type="button" onClick={handleCheckUsername}>
              중복확인
            </S.DuplicateCheckButton>
          </S.UserNameInputWrapper>
          <S.SignInInput
            {...register("nickname")}
            placeholder="닉네임"
          />
          {errors.nickname && <p>{errors.nickname.message}</p>}
          <S.SignInInput
            {...register("password")}
            type="password"
            placeholder="비밀번호"
          />
          {errors.password && <p>{errors.password.message}</p>}
          <S.SignInInput
            {...register("confirmPassword")}
            type="password"
            placeholder="비밀번호 확인"
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          <S.SignInButton
            type="submit"
            disabled={!isValid || !usernameAvailable}
            $isActive={isValid&&usernameAvailable ? true : false}
          >
            회원가입
          </S.SignInButton>
        </S.SignInWrapper>
      </S.SignInContainer>
    </S.Container>
  );
}
