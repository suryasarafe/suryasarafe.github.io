import { faBlogger } from "@fortawesome/free-brands-svg-icons";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function BlogLinkButton() {
  return (
    <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10 space-x-1">
      
        <Link title="Blog Page" href="/blog" className="block w-4 h-4 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
          <FontAwesomeIcon icon={faBlogger} className="object-cover object-center w-full h-full rounded-full text-orange-500" />
        </Link>
        
        <Link title="Skill Page" href="/skill" className="block w-4 h-4 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12 opacity-0">
          <FontAwesomeIcon icon={faWrench} className="object-cover object-center w-full h-full rounded-full text-orange-500 opacity-0" />
        </Link>
      
    </div>
  );
}