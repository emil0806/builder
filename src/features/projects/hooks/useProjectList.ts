export type Project = { id: string; name: string; imageUrl?: string; caseNo?: string };

export function useProjectList(companyId: string, opts: { limit?: number } = {}) {
  const data: Project[] = [
    { id: '2025DK', name: 'Byggeri DK', imageUrl: 'https://picsum.photos/seed/1/400/300', caseNo: '2025DK' },
    { id: '0000SE', name: 'Byggeri SE', imageUrl: 'https://picsum.photos/seed/2/400/300', caseNo: '0000SE' },
  ].slice(0, opts.limit ?? 5);
  return { data, isLoading: false, error: null as null | Error };
}
