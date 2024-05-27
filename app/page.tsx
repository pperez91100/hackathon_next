import { Button } from "@/components/ui/button"
import { BASE_API_URL } from "@/utils/constants"

export default async function Page() {

  const response = await fetch(`${BASE_API_URL}/api/test`);
  if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
  }

  const data = await response.json();
  console.log(data.message);
  
  return (
    <main className="">
      <h1 className="text-4xl font-bold text-center">Hello World</h1>
    </main>
  );
}