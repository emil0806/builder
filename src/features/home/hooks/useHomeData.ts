import { useProjectList } from '@features/projects/hooks/useProjectList';
import { useMyTasks } from '@features/calendar/hooks/useMyTasks';

interface HomeDataOptions {
  companyId: string;
  userId: string;
}

export function useHomeData({ companyId, userId }: HomeDataOptions) {
  const projects = useProjectList(companyId, { limit: 5 });
  const tasks = useMyTasks(userId, { date: new Date(), limit: 5 });

  const isLoading = projects.isLoading || tasks.isLoading;
  const hasError = !!(projects.error || tasks.error);

  return { projects, tasks, isLoading, hasError };
}
