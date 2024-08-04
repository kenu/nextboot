'use client';

import { useEffect, useState } from 'react';
import { fetchBoards } from '../lib/api';

interface Board {
  id: number;
  title: string;
  content: string;
}

export default function BoardList() {
  const [boards, setBoards] = useState<Board[]>([]);

  useEffect(() => {
    const getBoards = async () => {
      const fetchedBoards = await fetchBoards();
      setBoards(fetchedBoards);
    };
    getBoards();
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">게시글 목록</h2>
      <ul className="space-y-4">
        {boards.map((board) => (
          <li key={board.id} className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{board.title}</h3>
            <p>{board.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
