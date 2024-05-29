import { BASE_API_URL } from "@/utils/constants"
import Database from "@/components/database";

export default async function PageDatabase() {

    const response = await fetch(`${BASE_API_URL}/api/showdatabase`,{ cache: 'no-store' });
    if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
    }

    const data = await response.json();
    
    return (
        <Database data1={data.athletes_jo} data2={data.results_jo} />
    );
  }