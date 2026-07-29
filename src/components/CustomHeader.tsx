import type { LinkProp } from "@/user/types/links"
import type { ButtonProps } from "@base-ui/react"
import type { LucideIcon } from "lucide-react"
import { Link } from "react-router"
import { Button } from "./ui/button"
import logo_blanco from "/public/logo_blanco.png"
import { useState } from "react"

interface Props {
  link: LinkProp[]
  icon: LucideIcon
  logo: string
  button?: ButtonProps | undefined
}

const CustomHeader = ({link, icon: Icon, button = undefined }: Props) => {
  const [open, setOpen] = useState(false)
  const navTextStyle = "font-montserrat text-sm sm:text-base md:text-xl lg:text-[18px] leading-none"

  return (
    <>
      <div className="bg-(--color-primary) text-white flex items-center justify-between ">
        <img src={logo_blanco} alt="logo" className="w-15 h-15 sm:w-20 sm:h-20 md:w-25 md:h-25 lg:w-30 lg:h-30 object-contain " />

        <div className="flex items-center gap-2 mr-2 sm:mr-4">
          {button && (
            <div className="relative">
              <div
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-(--color-primary-hover) transition-colors cursor-pointer"
                >
                  <Icon className=" sm:w-6 sm:h-6 md:w-8 md:h-8" />

                  <Button
                    className={`h-auto p-0 bg-transparent hover:bg-transparent focus-visible:ring-0 ${navTextStyle}`}
                  >
                    Santiago Robles
                  </Button>
                </div>

                {open && (
                  <div className="absolute right-0 top-full mt-2 w-48 rounded-lg bg-white text-black shadow-lg overflow-hidden z-50">
                    <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
                      Cerrar cesion
                    </button>

                    <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
                      .
                    </button>
                  </div>
                )}
            </div>
          )}
      </div>
    </div>

      <nav className="sticky top-0 z-50 flex items-center justify-center px-4 sm:px-16 border-t py-3">
        <div className="flex items-center gap-3 sm:gap-6">
          {link.map((item) => (
            <Link
              key={item.name}
              to={item.url}
              className={`hover:text-(--color-primary) transition-colors font-montserrat text-sm sm:text-base md:text-xl lg:text-[22px] leading-none`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        
      </nav>
    </>
  )
}

export default CustomHeader