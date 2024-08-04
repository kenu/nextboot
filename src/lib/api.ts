const API_BASE_URL = 'http://localhost:8080/api';

export async function fetchBoards() {
  const response = await fetch(`${API_BASE_URL}/boards`);
  if (!response.ok) {
    throw new Error('Failed to fetch boards');
  }
  return response.json();
}

export async function createBoard(board: { title: string; content: string }) {
  const response = await fetch(`${API_BASE_URL}/boards`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(board),
  });
  if (!response.ok) {
    throw new Error('Failed to create board');
  }
  return response.json();
}
