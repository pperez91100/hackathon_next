import { BASE_API_URL } from "@/utils/constants"

export default async function PageHome() {

  const response = await fetch(`${BASE_API_URL}/api/test`);
  if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
  }

  const data = await response.json();
  console.log(data.message);
  
  return (
      <div className="w-full">
        <img
          alt="Cover Image"
          className="w-full max-h-screen object-cover block lg:hidden p-6"
          src="/img_jo2.png"
        />
        <img
          alt="Cover Image"
          className="w-full min-h-screen object-cover hidden lg:block"
          src="/img_jo.png"
        />
      </div>
  );
}