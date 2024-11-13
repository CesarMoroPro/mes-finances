import prisma from "@/lib/db";

export default async function Dashboard() {
    const users = await prisma.user.findMany();

    if (!users || users.length === 0) {
        return <p>Aucun utilisateur trouvé</p>;
    }

    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        Bienvenue {user.firstname}
                    </li>
                ))}
            </ul>
        </>
    );
}