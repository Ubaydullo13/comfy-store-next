function Header() {
  return (
     <header className="bg-neutral py-2 text-neutral-content">
            <div className='align-element flex justify-between sm:justify-end px-48'>
              <div className="flex gap-x-6 justify-center items-center">
                <a href = "#" className="link link-hover text-xs">Sign In / Guest</a>
                <a href="#" className="link link-hover text-xs">Create Account</a>
              </div>
            </div>
        </header> 
  )
}

export default Header