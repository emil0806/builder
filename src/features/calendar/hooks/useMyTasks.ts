export type Task = { id: string; title: string; time: string };

export function useMyTasks(userId: string, opts: { date?: Date; limit?: number } = {}) {
  const data: Task[] = [
    { id: 't1', title: 'Opmåling af tag', time: '8:00 - 12:00' },
    { id: 't2', title: 'Møde med kunde', time: '13:00 - 15:00' },
    { id: 't3', title: 'Færdiggør tilbud', time: '15:00 - 16:00' },
  ].slice(0, opts.limit ?? 5);
  return { data, isLoading: false, error: null as null | Error };
}
