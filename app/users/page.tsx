import prisma from "@/lib/db";

export default async function UsersPage() {

    const users = await prisma.user.findMany(); // prisma.user = le Model user dans le schéma prisma

    return <div>
        Liste des utilisateurs pour mon application :
        <ul>
        {users.map((user) => (
            <li key={user.id}>Hello {user.firstname}</li>
        ))}
        </ul>
    </div>
}