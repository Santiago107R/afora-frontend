import type { LinkProp } from "@/user/types/links";
import { Link } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";

interface Props {
  description: string;
  link?: LinkProp[];
}

const CustomFooter = ({ description, link }: Props) => {
  return (
    <footer className="bg-black border-t-2 border-gray-300 text-white px-5 py-2">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-4">

        <div className="text-sm">
          <p className="mb-2 text-gray-400 ">...</p>

          <p className= "text-gray-400">
            &copy; {description}
          </p>
        </div>
        
        <div className="text-sm">
          <p className="text-base mb-1">
            Contacto
          </p>

          <div className="flex items-center gap-1 text-xs mb-1">
            <Mail className="w-4 h-4" />
            <span>figma@gmail.com</span>
          </div>

          <div className="flex items-center gap-1 text-xs mb-1">
            <Phone className="w-4 h-4" />
            <span>11 5687 9802</span>
          </div>

          <div className="flex items-center gap-1 text-xs">
            <MapPin className="w-4 h-4" />
            <span>La Matanza, Argentina</span>
          </div>
        </div>

        <div className="flex justify-start md:justify-end gap-6 text-xs">
          {link?.map((item) => (
            <Link
              key={item.name}
              to={item.url}
              className="hover:text-(--color-thirty) transition-colors whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </div>

      </div>

    </footer>
  );
};

export default CustomFooter;