import React from "react";

const Predict: React.FC = () => {

    return (
        <div className="flex flex-col items-center justify-center">
            <h2> Methode Coude </h2>
            <img src="/methodeCoude.html" ></img>
            <h2>Clusters ( nbre de medaills par type )</h2>
            <img src="/clusters_performance_olympiques.html" ></img>
            <h2> clusters & pca </h2>
            <img src="/correltion_avec_pca.html" ></img>
            <h2> Caracteristiques des clusters </h2>
            <img src="/clusters_boc_plots.html" ></img>
        </div>

    );
}

export default Predict;
