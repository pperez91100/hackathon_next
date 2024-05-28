export default async function DatabaseLayout({
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