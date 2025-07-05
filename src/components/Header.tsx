function Header() {
  return(
    <header className="flex gap-1 items-center mt-4 mb-6
    sm:mt-6 sm:mb-8
    lg:mb-4
    ">
      <div className="text-white font-black bg-blue-400 px-2 py-0.5 rounded-sm md:text-lg">BMI</div>
      <p className="text-gray-400 text-xs md:text-sm">powered by <a href="https://github.com/luiz-feliph" target="_blank" className="hover:underline">Luiz Felipe</a></p>
    </header>
  )
}

export default Header;