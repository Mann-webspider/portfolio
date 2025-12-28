import Link from "next/link"

function Navbar() {
  return (
    <nav className=" mx-16 font-[itcMedium] flex justify-between sticky top-0 py-6 items-center z-50">
          <div className="logo uppercase font-[itcBold]">shelby</div>
          <div className="menus">
            <ul className="flex gap-16 mr-12">
              <li>
                <Link href="/#about">About</Link>
              </li>
              <li>
                <Link href="/#contact">Contact</Link>
              </li>
              <li>
                <Link href="/#works">Work</Link>
              </li>
              <li>
                <Link href="/blog">Blogs</Link>
              </li>
            </ul>
          </div>
        </nav>
  )
}

export default Navbar