import { BASE_API_URL } from "@/utils/constants"
import Home from "@/components/home";

export default async function Page() {

  const response = await fetch(`https://hackathon-fastapi.vercel.app/`);
  if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
  }

  const data = await response.json();
  console.log(data);
  
  return (
    <Home />
  );
}