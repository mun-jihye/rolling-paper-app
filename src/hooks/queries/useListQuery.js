import { getRecipients } from 'api/recipient';
import { useQuery } from 'react-query';

export const useGetRecipientsInOrderQuery = sort => {
  return useQuery({
    queryKey: ['recipients', sort],
    queryFn: () => getRecipients({ sort }),
  });
};
