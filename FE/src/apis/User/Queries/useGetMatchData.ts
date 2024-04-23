import { getMatchData } from '@/apis/User/userAPI';
import { useSuspenseQuery } from '@tanstack/react-query';


const useGetMatchData = (id: string) => {
  const data = useSuspenseQuery({
    queryKey: ['matchData'],
    queryFn: () => getMatchData(id),
  })
  return data;
}

export { useGetMatchData };