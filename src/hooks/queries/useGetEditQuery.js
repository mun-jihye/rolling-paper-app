import { getRecipient } from 'api/recipient';
import { useQuery } from 'react-query';

export const useGetRecipientQuery = postId => {
  return useQuery({
    queryKey: ['recipient', postId],
    queryFn: () => getRecipient(postId),
  });
};
