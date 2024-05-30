import React from "react";

const Predict: React.FC = () => {

    return (
        <div className="flex flex-col items-center justify-center">

            <img src="/total_medailles_IA.png" alt="Médailles IA" />
            <img src="/gold_medailles_IA.png" alt=" Gold Médailles IA" />
            <img src="/silver_medailles_IA.png" alt=" Silver Médailles IA" />
            <img src="/bronze_medailles_IA.png" alt=" Bronze Médailles IA" />
            <img src="/France_medailles_IA.png" alt=" Gold Médailles IA" />

            <h2> Methode Coude </h2>
            <img src="/elbow_plot.png" ></img>
            <h2>Clusters ( nbre de medaills par type )</h2>
            <img src="/cluster_performances_olympiques.png" ></img>
            <h2> clusters & pca </h2>
            <img src="/correlation_and_pca.png" ></img>
            <h2> Caracteristiques des clusters </h2>
            <img src="/clusters_and_box_plots.html" ></img>

        </div>

    );
}

export default Predict;
