import { getReactions, postReactions } from 'api/reaction';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export const useGetReactionQuery = postId => {
  return useQuery({
    queryKey: ['reaction', postId],
    queryFn: () => getReactions(postId),
  });
};

export const usePostReactionQuery = postId => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: data => postReactions(postId, data),
    // onMutate: async newData => {
    //   const oldData = queryClient.getQueryData(['reaction', postId]);

    //   queryClient.setQueryData(['reaction', postId], oldData => ({
    //     ...oldData,
    //     ...newData,
    //   }));
    //   console.log(oldData);
    //   console.log(newData);
    //   return { oldData };
    // },
    // onError: context => {
    //   queryClient.setQueryData(['reaction', postId], context.oldData);
    // },
    onSuccess: context => {
      // queryClient.setQueryData(['reaction', postId], context.newData);
      queryClient.invalidateQueries(['reaction', postId]);
    },
  });
};
