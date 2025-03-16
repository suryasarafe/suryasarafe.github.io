import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin, faGooglePlay } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"
export default function Footer() {
  return <section className="">
    <footer className="w-full h-10 bottom-0 border-t mb-4">
      <div className="flex flex-col md:flex-row md:justify-between mt-3 mx-4 text-center text-slate-400">
        <div>
          <Link href="/" className="hover:bg-slate-200 rounded-md px-2">
            Surya Akhri Ramadhan 2024
          </Link>
        </div>

        <div className="flex py-2 gap-4 justify-center">

          <div className="cursor-pointer hover:scale-110">
            <a href="https://github.com/suryasarafe" target="_blank">
              <FontAwesomeIcon icon={faGithub} height={24} width={24} />
            </a>
          </div>

          <div className="cursor-pointer hover:scale-110">
            <a href="https://id.linkedin.com/in/suryasarafe" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} height={24} width={24} />
            </a>
          </div>
          <div className="cursor-pointer hover:scale-110">
            <a href="https://www.instagram.com/suryasarafe" target="_blank">
              <FontAwesomeIcon icon={faInstagram} height={24} width={24} />
            </a>
          </div>
          <div className="cursor-pointer hover:scale-110">
            <a href="https://play.google.com/store/apps/details?id=com.sae.money_manager&hl=en" target="_blank">
              <FontAwesomeIcon icon={faGooglePlay} height={24} width={24} />
            </a>
          </div>

        </div>

      </div>

    </footer>
  </section>
}