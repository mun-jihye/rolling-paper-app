import { deleteMessage } from 'api/message';
import { deleteRecipient, getRecipient, getRecipientList } from 'api/recipient';
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';

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
  });
  return deleteData;
};

export const useGetMessagesQuery = (postId, limit = 8, offset = 0) => {
  return useInfiniteQuery({
    queryKey: ['messages', postId],
    queryFn: () => getRecipientList(postId, limit, offset),
    getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,
  });
};
