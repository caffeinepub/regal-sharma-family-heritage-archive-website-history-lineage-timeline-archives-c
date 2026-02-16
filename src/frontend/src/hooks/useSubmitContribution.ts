import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Submission } from '../backend';

interface SubmitContributionParams {
  submissionId: string;
  submission: Submission;
}

export function useSubmitContribution() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ submissionId, submission }: SubmitContributionParams) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitForm(submissionId, submission);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['submissions'] });
    },
  });
}
