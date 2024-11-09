import prisma from "@/lib/db";

export default async function Dashboard() {

        const user = await prisma.user.findUnique({
            where: {
                id : 
            }
        })

    return (
        <>
            Bienvenue 
        </>
    )
}