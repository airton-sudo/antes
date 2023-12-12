import { sql } from "@vercel/postgres";
import { useSearchParams } from "next/navigation";


export const revalidate = 0

export default function NewDoll(){ 
  


  async function saveDoll(formData: FormData){
    "use server"
    const name = formData.get("name") as string;
    const hair = formData.get("hair") as string;
    console.log("name, hair")

    await sql`INSERT INTO doll (name, hair) VALUES(${name}, ${hair})`
    console.log("Acessou função")


  }
  return (
    <div>
      <h1 className="text-black text-center text-4xl">Cadastrar boneca</h1>
      <form>
        <input type="text" name="name" placeholder="Nome da boneca" /><br /><br />
        <input type="text" name="hair" placeholder="Cor do cabelo" /> <br /><br />
        <button formAction={saveDoll} className="text-black">Salvar</button>
        <br />
      </form>
    </div>

  )
}
