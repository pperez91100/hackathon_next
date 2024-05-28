export default async function OlympicPredictionsLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {

    return (
        <section>
            <div>
                {children}
            </div>
        </section>
    )
  }