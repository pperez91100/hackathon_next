import { Button } from "@/components/ui/button"

export default async function PageHome() {

  const response = await fetch(`http://localhost:3000/api/test`, { cache: 'no-store' });
  if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
  }

  const data = await response
  console.log(data)
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <Button className="m-2">Click me</Button>
    </div>
  );
}