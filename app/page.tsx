import { Button } from "@/components/ui/button"

export default async function PageHome() {

  const response = await fetch(`http://localhost:3000/api/test`, { cache: 'no-store' });
  if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
  }

  const data = await response.json();

  return (
    <main className="">
      <h1 className="text-4xl font-bold text-center">Hello World</h1>
    </main>
  );
}