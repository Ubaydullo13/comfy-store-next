import { Cart3, MoonFill } from "react-bootstrap-icons"

function Navbar() {
  return (
    <div className="w-full flex justify-between px-48 bg-slate-100 py-2 items-center">
    <a
      className="text-3xl items-center bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg"
      href="/"
    >
      C
    </a>
    <div className="flex gap-6">
      <a href='/' className='px-3 py-2 rounded-lg text-201431 hover:bg-slate-200'>
            Home
      </a>

      <a href='#' className='px-3 py-2 rounded-lg text-201431 hover:bg-slate-200'>
            About
      </a>

      <a href='#' className='px-3 py-2 rounded-lg text-201431 hover:bg-slate-200'>
            Products
      </a>
      <a href='#' className='px-3 py-2 rounded-lg text-201431 hover:bg-slate-200'>
            Cart
      </a>
    </div>

    <div className="indicator flex items-center gap-8">
      <MoonFill className="swap-off h-4 w-4" />
      <a href="/cart">
        <Cart3 className="h-6 w-6" />
        <span className="badge badge-sm badge-primary indicator-item">0</span>
      </a>
    </div>
  </div>
  )
}

export default Navbar