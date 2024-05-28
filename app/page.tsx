import { BASE_API_URL } from "@/utils/constants"
import Home from "@/components/home";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function Page() {

  const response = await fetch(`${BASE_API_URL}/api/test`);
  if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
  }

  const data = await response.json();
  console.log(data);
  
  return (
    <Home />
  );
}