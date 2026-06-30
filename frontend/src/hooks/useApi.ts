import { useEffect, useState } from 'react';
import { getHealth, getHistory } from '@/lib/api';

export function useApi() {
  const [health, setHealth] = useState<{ ok: boolean; service: string } | null>(null);
  const [history, setHistory] = useState<Array<{ id: string; title: string; relevance: number; status: string }>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [healthResult, historyResult] = await Promise.all([getHealth(), getHistory()]);
        setHealth(healthResult);
        setHistory(historyResult.items);
      } catch (error) {
        console.error('Erro ao carregar dados da API', error);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { health, history, loading };
}
