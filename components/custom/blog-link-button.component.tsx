import { faBlogger } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function BlogLinkButton() {
  return (
    <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
      <div>
        <Link title="Buy me a Coffee" href="/blog" className="block w-4 h-4 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
          <FontAwesomeIcon icon={faBlogger} className="object-cover object-center w-full h-full rounded-full text-orange-500" />
        </Link>
      </div>
    </div>
  );
}