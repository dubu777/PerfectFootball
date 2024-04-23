import { useMutation } from "@tanstack/react-query";
import { updateUserInfo } from "../userAPI";



const useUpdateUserInfo = () => {
  return useMutation({
    mutationFn: (uerInfo: IUserInfo) =>
      updateUserInfo(uerInfo),
  });
};

export { useUpdateUserInfo };
