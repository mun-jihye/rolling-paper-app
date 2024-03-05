import { deleteRecipients, getRecipient } from 'api/recipient';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export const useGetRecipientQuery = postId => {
  return useQuery({
    queryKey: ['recipient', postId],
    queryFn: () => getRecipient(postId),
  });
};

export const useDeleteRecipient = postId => {
  const queryClient = useQueryClient();
  const deleteRecipient = useMutation({
    mutationFn: () => deleteRecipients(postId),
    onSuccess: () => {
      queryClient.invalidateQueries(['comments', postId]);
    },
  });
  return deleteRecipient;
};
