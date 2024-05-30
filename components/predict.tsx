import React from "react";

const Predict: React.FC = () => {

    return (
        <div className="flex flex-col items-center justify-center">

            <img src="/total_medailles_IA.png" alt="Médailles IA" />
            <img src="/gold_medailles_IA.png" alt=" Gold Médailles IA" />
            <img src="/silver_medailles_IA.png" alt=" Silver Médailles IA" />
            <img src="/bronze_medailles_IA.png" alt=" Bronze Médailles IA" />
            <img src="/France_medailles_IA.png" alt=" Gold Médailles IA" />

            <h1> Methode Coude </h1>
            <img src="/elbow_plot.png" ></img>
            <h1>Les Differents Clusters obtenues par Kmeans </h1>
            <img src="/cluster_performances_olympiques.png" ></img>
            <h1> Analyse des clusteurs par Correlation et ACP </h1>
            <img src="/correlation_and_pca.png" ></img>
            <h2> Observation des caracteristiques des clusters </h2>
            <img src="/clusters_and_box_plots.png" ></img>

        </div>

    );
}

export default Predict;
