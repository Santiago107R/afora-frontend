import { useAuthStore } from "@/auth/store/auth.store";
import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";

const LoginDevPage = () => {
    const [isPosting, setIsPosting] = useState(false)
    const navigate = useNavigate()
    const { logindev } = useAuthStore()

    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsPosting(true)

        const formData = new FormData(event.target as HTMLFormElement)
        const rol = formData.get('rol') as string

        const isValid = logindev(rol)

        if (isValid) {
            navigate('/')
            return
        }

        setIsPosting(false)
    }

    return (
        <>
            <div className="flex flex-row justify-center items-center gap-10 min-h-screen w-full">

                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl">Iniciar Sesión</h1>
                    </div>

                    <form onSubmit={handleLogin} className="flex flex-col justify-center items-center gap-4 ">
                        <label htmlFor="rol" className="text-xl">Ingrese su Rol:</label>
                        <div className="flex flex-row items-center gap-3 border border-gray-300 rounded-xl px-4 bg-white focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all shadow-sm">
                            <div className="text-gray-400 shrink-0">
                                <UserCircle className="w-6 h-6" />
                            </div>

                            <div className="h-6 w-px bg-gray-200" />

                            <select name="rol" id="rol" className="w-full text-gray-800 placeholder-gray-400 py-3 bg-transparent focus:outline-none text-lg">
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>

                        <Button
                            type="submit"
                            disabled={isPosting}
                            className={"bg-(--color-primary) hover:bg-(--color-primary-hover) self-center text-black text-xl px-18 py-5 mt-5 font-montserrat"}
                        >Ingresar</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginDevPage
