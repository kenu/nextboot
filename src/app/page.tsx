import BoardList from '../components/BoardList';
import BoardForm from '../components/BoardForm';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">게시판</h1>
      <BoardForm />
      <BoardList />
    </main>
  );
}
