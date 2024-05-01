import { useMutation } from "@tanstack/react-query"
import { checkUsername } from "../userAPI"



export const useCheckUsername = () => {
  return useMutation({
    mutationFn: async (username: string) => {
      try {
        const response = await checkUsername(username);
        return response.message; // 서버에서 status 반환
      } catch (error) {
        console.error('Failed to check username:', error);
        throw error;
      }
    },
  });
}