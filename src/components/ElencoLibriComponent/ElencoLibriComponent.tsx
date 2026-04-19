import { useLibri } from "../../hooks/useLibri";
import NavbarComponent from "../NavbarComponent/NavbarComponent";


const ElencoLibriComponent = () => {
    const { libriFiltrati, loading, error, isFiltrato, handlerCercaLibro, handlerResetFiltro } = useLibri();

    if (loading) return <div>Caricamento in corso...</div>;
    if (error) return <div>Errore: {error}</div>;

    return (
        <>
        <NavbarComponent />
        <div className="md:m-[30px] md:ml-[290px]">
            <div className="relative mt-20 overflow-x-auto shadow-md sm:rounded-lg">
                {/* --- Form di Ricerca --- */}
                <form className="mb-5 flex p-2.5 md:inline-flex items-center">
                    <div id="input-filtro" className="w-[400px]">
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                                <svg className="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input
                                type="search"
                                onChange={(e) => handlerCercaLibro(e.target.value)}
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Cerca per titolo..."
                            />
                        </div>
                    </div>
                    {isFiltrato && (
                        <button
                            onClick={handlerResetFiltro}
                            type="button"
                            className="ml-4 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800"
                        >
                            Annulla
                        </button>
                    )}
                </form>

                {/* --- Tabella --- */}
                <table className="w-full text-left text-sm text-gray-500">
                    <thead className="bg-[#DF03AF] text-xs text-white uppercase">
                        <tr>
                            <th className="px-6 py-3">Titolo</th>
                            <th className="px-6 py-3">Autore</th>
                            <th className="px-6 py-3">Genere</th>
                            <th className="px-6 py-3">Data</th>
                            <th className="px-6 py-3">ISBN</th>
                            <th className="px-6 py-3">Stato</th>
                        </tr>
                    </thead>
                    <tbody>
                        {libriFiltrati.map((libro) => (
                            <tr key={libro.libroId} className="border-b border-gray-200 odd:bg-white even:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">{libro.titolo}</td>
                                <td className="px-6 py-4">{libro.autore}</td>
                                <td className="px-6 py-4">{libro.genere}</td>
                                <td className="px-6 py-4">{new Date(libro.dataPubblicazione).toLocaleDateString()}</td>
                                <td className="px-6 py-4">{libro.isbn}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-white ${libro.disponibile ? 'bg-green-500' : 'bg-red-500'}`}>
                                        {libro.disponibile ? 'Disponibile' : 'Non disponibile'}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};

export default ElencoLibriComponent;