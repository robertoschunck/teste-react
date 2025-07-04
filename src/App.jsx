
import './App.css' 
import { FaCat } from "react-icons/fa";


  function App() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-pink-300">
        <header className="bg-white p-4 flex items-center justify-center w-full absolute top-0">
          <FaCat className='text-4xl text-purple-500 m-2' />                                                                                
          <h2 className="text-3xl font-bold text-purple-500">Dudasys</h2>
          <FaCat className='text-4xl text-purple-500 m-2'/>  
        </header>
  
        <div className="w-[360px] h-[260px] bg-white shadow-lg rounded-lg flex flex-col items-center justify-center p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Entrar na sua conta</h3>
          <input 
            type="text" 
            placeholder="Digite o email" 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 m-0.5"
          />
          <input 
            type="text" 
            placeholder="Digite a senha" 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 m-0.5"
          />
          <button 
          className="w-full bg-purple-600 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 m-2 cursor-pointer "
        >
          Entrar
        </button>
        </div>
      </div>
    );
  }
 
export default App

