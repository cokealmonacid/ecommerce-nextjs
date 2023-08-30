import Image from 'next/image'

const Contact = () => {
  return (
    <div className="w-1/2 mx-auto flex py-20 gap-20 justify-center">
      <Image src="/temporary/alonso.webp" alt="Delakalle skateshop contacto" width={400} height={400} className="flex-1"/>
      <div  className="flex-1">
        <h2 className="text-2xl mb-4">Contáctanos</h2>
        <form>
          <div className="mb-4 flex flex-col">
            <label className="text-gray-700 text-base mb-2" htmlFor="name">Tú nombre</label>
            <input className="shadow rounded-none border-2 border-slate-700 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" placeholder="Escribe tu nombre" required />
          </div>
          <div className="mb-4 flex flex-col">
            <label className="text-gray-700 text-base mb-2" htmlFor="email">Tú e-mail</label>
            <input className="shadow rounded-none border-2 border-slate-700 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="Escribe tu email"  required />
          </div>
          <div className="mb-4">
            <label className="text-gray-700 text-base mb-2" htmlFor="mensaje">Tu Mensaje </label>
            <textarea className="shadow rounded-none border-2 border-slate-700 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mensaje" rows={5} placeholder="El mensaje" required></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-black text-white py-4 px-12 font-bold w-full focus:outline-none focus:shadow-outline" type="submit"> Enviar mensaje </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact