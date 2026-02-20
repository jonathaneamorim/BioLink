import data from '@/data/user.json';

export default function ShowCasePage({ params }: { params: { id: string } }) {
  const { showCases } = data;
  const showCase = showCases.find(sc => Number(sc.id) === Number(params.id));
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">{showCase?.showCaseName}</h1>
        <p className="text-lg opacity-80">{showCase?.showCaseDescription}</p>
      </div>
    </div>
  );
}