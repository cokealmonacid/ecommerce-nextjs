import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="border-b-2 border-b-stone-800 py-6">
      <div className="container mx-auto flex items-center px-4 md:px-0">
        <div className="hidden md:flex flex-row gap-4 flex-1">
          <Link href="/"><h1>Home</h1></Link>
          <Link href="/products"><h1>Productos</h1></Link>
          <Link href="/contact"><h1>Contacto</h1></Link>
        </div>
        <div className="md:hidden flex-1">
          <h1>MENU</h1>
        </div>
        <Link href="/">
          <Image src="/logo.png" alt="Delakalle Skateshop" width={100} height={100} />
        </Link>
        <div className="flex flex-row gap-4 flex-1 justify-end">
          <a href="https://www.instagram.com/delakalleskateshop/"><Image src="/instagram.png" alt="Delakalle Skateshop instagram" width={28} height={28} /></a>
          <Image src="/cart.png" alt="Delakalle Skateshop carro de compras" width={30} height={30} />
        </div>
      </div>
    </div>
  )
}

export default Navbar