import { BASE_API_URL } from "@/utils/constants"
import Predictions from "@/components/predictions";

// Fonction pour formater les noms de colonnes
function formatColumnName(columnName: string) {
    return columnName
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

export default async function PageDatabase() {

    const response = await fetch(`${BASE_API_URL}/api/showdatabase`);
    if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
    }

    const data = await response.json();
    
    const columns: string[] = data.database.fields.map((field: { name: string; }) => formatColumnName(field.name));
    
    return (
        <Predictions columns={columns} />
    );
  }