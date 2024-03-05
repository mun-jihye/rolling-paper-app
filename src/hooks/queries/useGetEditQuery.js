import { deleteMessage } from 'api/message';
import { deleteRecipient, getRecipient } from 'api/recipient';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export const useGetRecipientQuery = postId => {
  return useQuery({
    queryKey: ['recipient', postId],
    queryFn: () => getRecipient(postId),
  });
};

export const useDeleteRecipientQuery = postId => {
  const queryClient = useQueryClient();
  const deleteData = useMutation({
    mutationFn: () => deleteRecipient(postId),
    onSuccess: () => {
      queryClient.invalidateQueries(['recipient', postId]);
    },
  });
  return deleteData;
};

export const useDeleteMessageQuery = messageId => {
  const queryClient = useQueryClient();
  const deleteData = useMutation({
    mutationFn: () => deleteMessage(messageId),
    onSuccess: () => {
      queryClient.invalidateQueries(['message', messageId]);
    },
    onError: error => {
      console.log(error);
    },
  });
  return deleteData;
};
