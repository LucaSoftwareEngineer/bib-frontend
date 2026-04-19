import { ToastContainer } from "react-toastify";
import useRegister from "../../hooks/useRegister";

const RegisterComponent = () => {
  const { 
    nome, setNome, 
    cognome, setCognome, 
    email, setEmail, 
    password, setPassword, 
    dataNascita, setDataNascita, 
    luogoNascita, setLuogoNascita, 
    registerHandler 
  } = useRegister();

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <a className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
            <img
              className="mr-2 h-8 w-8 rounded-lg"
              src="./logo.png"
              alt="logo"
            />
            <span className="text-[#DF03AF]">BIB</span>
            <span className="ml-2">Noleggia Libri</span>
          </a>
          <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-gray-800">
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 className="text-xl leading-tight font-bold tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Crea il tuo account
              </h1>
              <div className="space-y-4 md:space-y-6">
                
                {/* Nome */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Nome
                  </label>
                  <input
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    type="text"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Mario"
                  />
                </div>

                {/* Cognome */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Cognome
                  </label>
                  <input
                    value={cognome}
                    onChange={(e) => setCognome(e.target.value)}
                    type="text"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Rossi"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="name@company.com"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="••••••••"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>

                {/* Data di Nascita */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Data di nascita
                  </label>
                  <input
                    value={dataNascita}
                    onChange={(e) => setDataNascita(e.target.value)}
                    type="date"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>

                {/* Luogo di Nascita */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Luogo di nascita
                  </label>
                  <input
                    value={luogoNascita}
                    onChange={(e) => setLuogoNascita(e.target.value)}
                    type="text"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Roma"
                  />
                </div>

                <button
                  onClick={() => registerHandler()}
                  type="button"
                  className="me-2 mb-2 w-full cursor-pointer rounded-lg bg-[#DF03AF] px-5 py-2.5 text-sm font-medium text-white hover:bg-black focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Registrati
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default RegisterComponent;