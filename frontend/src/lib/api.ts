const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
    ...init,
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function getHealth() {
  return request<{ ok: boolean; service: string }>('/health');
}

export async function uploadVideo(payload: { source: string; url?: string }) {
  return request<{ ok: boolean; jobId: string; message: string }>('/api/upload', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function getHistory() {
  return request<{ ok: boolean; items: Array<{ id: string; title: string; relevance: number; status: string }> }>('/api/history');
}

export async function processJob(jobId: string) {
  return request<{ ok: boolean; jobId: string; analysis: unknown; clipDraft: unknown }>(`/api/processing/${jobId}`, {
    method: 'POST',
  });
}
