'use client';

import { useState } from 'react';
import { createBoard } from '../lib/api';

export default function BoardForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createBoard({ title, content });
    setTitle('');
    setContent('');
    // 여기서 게시글 목록을 새로고침하는 로직을 추가할 수 있습니다.
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block mb-2">제목</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="content" className="block mb-2">내용</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        게시글 작성
      </button>
    </form>
  );
}
