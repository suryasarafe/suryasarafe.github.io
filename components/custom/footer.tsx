import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faGooglePlay, faGooglePlus } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"
export default function Footer() {
  return <section className="">
    <footer className="w-full h-10 bottom-0 border-t mb-4">
      <div className="flex flex-col md:flex-row md:justify-between mt-3 mx-4 text-center text-slate-400">
        <div>
          <Link href="/" className="hover:text-green-700 rounded-md px-2 transition-all">
            Surya Akhri Ramadhan 2025
          </Link>
        </div>

        <div className="flex py-2 gap-4 justify-center">

          <div className="cursor-pointer hover:scale-110 hover:text-gray-600">
            <a href="https://github.com/suryasarafe" target="_blank" className="text-sm">
              <FontAwesomeIcon icon={faGithub} height={24} width={24} />
            </a>
          </div>

          <div className="cursor-pointer hover:scale-110 hover:text-blue-500">
            <a href="https://id.linkedin.com/in/suryasarafe" target="_blank" className="text-sm">
              <FontAwesomeIcon icon={faLinkedin} height={24} width={24} />
            </a>
          </div>
          
          <div className="cursor-pointer hover:scale-110 hover:text-red-500">
            <a href="mailto:surya.akdhan@gmail.com" target="_blank" className="text-sm">
              <FontAwesomeIcon icon={faGooglePlus} height={24} width={24} />
            </a>
          </div>

          <div className="cursor-pointer hover:scale-110 hover:text-green-600">
            <a href="https://play.google.com/store/apps/details?id=com.sae.money_manager&hl=en" target="_blank" className="text-sm">
              <FontAwesomeIcon icon={faGooglePlay} height={24} width={24} />
            </a>
          </div>

        </div>

      </div>

    </footer>
  </section>
}