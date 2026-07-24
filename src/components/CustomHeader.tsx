import type { LinkProp } from "@/user/types/links"
import type { ButtonProps } from "@base-ui/react"
import type { LucideIcon } from "lucide-react"
import { Link } from "react-router"
import { Button } from "./ui/button"

interface Props {
  title: string
  link: LinkProp[]
  icon: LucideIcon
  logo: string
  button?: ButtonProps | undefined
}

const CustomHeader = ({ title, link, icon: Icon, logo, button = undefined }: Props) => {
  const navTextStyle = "font-montserrat text-sm sm:text-base md:text-xl lg:text-[27px] leading-none"

  return (
    <>
      <div className="bg-(--color-primary) text-white flex items-center justify-between py-[clamp(1vw,3vw,1rem)]">
        <img src={logo} alt="logo" className="w-11 h-11 sm:w-13 sm:h-13 md:w-15 md:h-15 lg:w-20 lg:h-20 object-contain ml-4 sm:ml-8" />
        <h1 className="text-3xl sm:text-4xl md:text-1vw lg:text-5xl font-antón text-center flex-1">{title}</h1>
        <Icon className="w-11 h-11 sm:w-13 sm:h-13 md:w-15 md:h-15 mr-4 sm:mr-8" />
      </div>

      <nav className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-8 bg-[#2C3E50] text-white border-t border-[#1A2B3C] shadow-lg py-3">
        <div className="flex items-center gap-3 sm:gap-6">
          {link.map((item) => (
            <Link
              key={item.name}
              to={item.url}
              className={`hover:text-blue-200 transition-colors ${navTextStyle}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {button && (
          <Button
            variant={"ghost"}
            className={`h-auto p-0 hover:bg-transparent hover:text-blue-200 focus-visible:ring-0 ${navTextStyle}`}
            {...button}
          />
        )}
      </nav>
    </>
  )
}

export default CustomHeader