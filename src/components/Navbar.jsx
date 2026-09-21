function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold text-gray-900">
          Daviez
        </a>
        <ul className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <li>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
