import type { LinkProp } from "@/user/types/links";
import { Link } from "react-router";

interface Props {
  description: string;
  link?: LinkProp[];
}

const CustomFooter = ({ description, link }: Props) => {
  return (
    <footer className="bg-(--color-primary) border-t-2 p-5 text-white">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">

        <p className="text-gray-200 text-sm">
          &copy; {description}
        </p>

        <div className="flex flex-col items-end">

          {link && link.map((item) => (
            <Link key={item.name} to={item.url} className="hover:text-blue-200">
              {item.name}
            </Link>
          ))}
        </div>

      </div>

    </footer>
  )
}

export default CustomFooter
