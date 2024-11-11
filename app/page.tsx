import Link from "next/link";

export default function Landing() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <header className="w-full p-2 border-double border-2 border-sky-500">
                <div className="items-center flex-wrap">
                    <h1>Mes Finances</h1>
                    <Link href="/connexion" className="p-2 rounded-md bg-teal-700 text-white font-bold hover:bg-teal-600">Se connecter</Link>
                </div>
            </header>
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <p>
                    Gérez vos finances très simplement.
                    Ajoutez vos revenus et dépenses. Consultez votre épargne et votre taux d&#39;endettement.
                    Jour après jour, conservez vos finances saines et claires,
                </p>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            
            </footer>
        </div>
    );
}
