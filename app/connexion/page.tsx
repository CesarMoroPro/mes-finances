export default function ConnexionForm() {

    return (
        <>
            <form>
                <div>
                    <label>Email</label>
                    <input type="mail" className="p-2 rounded-md text-grey border-teal-700 border-solid border-2" required placeholder="johnsmith@gmail.com"/>
                </div>
                <div>
                    <label>Mot de passe</label>
                    <input type="text" className="p-2 rounded-md text-grey border-teal-700 border-solid border-2" required placeholder="***********"/>
                </div>
            </form>
        </>
    )
}