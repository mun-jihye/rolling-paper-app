import { deleteMessage } from 'api/message';
import { deleteRecipient, getRecipient, getRecipientList } from 'api/recipient';
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
import { errorAlert } from 'utils/errorAlert';

export const useGetRecipientQuery = postId => {
  return useQuery({
    queryKey: ['recipient', postId],
    queryFn: () => getRecipient(postId),
    onError: errorAlert({ title: '롤링페이퍼 대상 조회 실패' }),
  });
};

export const useDeleteRecipientQuery = postId => {
  const queryClient = useQueryClient();
  const deleteData = useMutation({
    mutationFn: () => deleteRecipient(postId),
    onSuccess: () => {
      queryClient.invalidateQueries(['recipient', postId]);
    },
    onError: errorAlert({ title: '롤링페이퍼 대상 삭제 실패' }),
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
    onError: errorAlert({ title: '롤링페이퍼 메세지 삭제 실패' }),
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
