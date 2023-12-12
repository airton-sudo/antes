export default function Header() {
    return (
        <header className="text-center text-black py-8 border-b border-[#4d4d4d] md:flex itens-center justify-between">
            <h4>🏫ESCOLA TECNOLÓGICA📘</h4>
            <nav>
                <a className="hover:text-[#00e77f]" href="/admin/doll">
                    listar carros disponiveis &nbsp;
                </a>
                <a className="hover:text-[#00e77f]" href="/admin/doll/new">
                    cadastrar &nbsp;{" "}
                </a>
                <a className="hover:text-[#00e77f]" href="./">
                    LogOut &nbsp;
                </a>
            </nav>
        </header>
    )
}
