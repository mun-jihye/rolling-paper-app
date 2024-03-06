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

export const useGetMessagesQuery = (postId, limit = 5) => {
  return useInfiniteQuery({
    queryKey: ['messages', postId],
    queryFn: async ({ pageParam = 0 }) => {
      return await getRecipientList(postId, limit, { offset: pageParam });
    },
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length * limit;

      if (lastPage?.data.next === null) {
        return undefined;
      }

      if (lastPage?.data.count <= nextPage) {
        return undefined;
      }

      return nextPage;
    },
    retry: false,
  });
};
