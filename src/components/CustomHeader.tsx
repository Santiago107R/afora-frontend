import type { LinkProp } from "@/user/types/links"
import type { ButtonProps } from "@base-ui/react"
import type { LucideIcon } from "lucide-react"
import { Link } from "react-router"
import { Button } from "./ui/button"
import logo_negro from "/public/logo_negro.png"


interface Props {
  link: LinkProp[]
  icon: LucideIcon
  logo: string
  button?: ButtonProps | undefined
}

const CustomHeader = ({ link, icon: Icon, button = undefined }: Props) => {

  const navTextStyle = "font-montserrat text-sm sm:text-base md:text-xl lg:text-[18px] leading-none"

  return (
    <>
      <div className="bg-(--color-primary)  flex items-center justify-between ">
        <img src={logo_negro} alt="logo" className="w-15 h-15 sm:w-20 sm:h-20 md:w-25 md:h-25 lg:w-30 lg:h-30 object-contain " />

        <div className="flex items-center gap-2 mr-2 sm:mr-4">
          <div className="flex items-center gap-3 mr-2 sm:mr-4">
            {button && (
              <>
                <Button
                  className={` text-bg-black h-auto px-3 py-2 bg-transparent hover:bg-(--color-primary-hover) ${navTextStyle}`}{...button}
                >
                  Cerrar sesión
                </Button>


              </>
            )}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg ">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-12 md:h-12" />

              <span className={navTextStyle}>
                Gonzalo Perez
              </span>
            </div>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 flex justify-center py-2 ">
        <div className="flex items-center  bg-black rounded-full pr-8 pl-2 py-2 gap-20 ">

          <div className="w-8 h-8 bg-white rounded-full shrink-0" />

          <div className="flex items-center gap-20 pr-4">
            {link.map((item) => (
              <Link key={item.name} to={item.url} className=" text-white font-montserrat text-sm sm:text-base md:text-lg hover:text-(--color-primary) transition-colors" >
                {item.name}
              </Link>
            ))}
          </div>

        </div>
      </nav>
    </>
  )
}

export default CustomHeader