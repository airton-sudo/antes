import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
export const revalidate =0

export default async function ListDoll() {
    async function deleteDoll(formData: FormData){
        "use server"
        const id = formData.get("id") as string;
        await sql`DELETE from doll where id=${id}`
        revalidatePath("/admin/doll/new")
    }
    const { rows } = await sql`SELECT * from doll`;
    return (
        <div>
            <h1 className="text-center text-black">Lista de bonecas</h1>

            <table>
                <thead>
                    <tr> <td>Nome da boneca</td> <td>Cor do cabelo</td></tr>
                </thead>
                <tbody>
                    {
                        rows.map((doll) => {
                            return (
                                <tr key={doll.id}><td>{doll.name}</td> <td>{doll.hair}</td> 
                                <td>
                                    <form >
                                     <input type="text" hidden name="id" value={doll.id}/>   
                                    <button formAction={deleteDoll}>Excluir</button>
                                    </form>
                                
                                </td> 
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}
