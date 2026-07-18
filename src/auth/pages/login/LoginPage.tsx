import { Button } from "@/components/ui/button";
import { UserCircle, Eye, EyeClosed } from "lucide-react";
import { useState, type FormEvent } from "react";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(true)

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev)
    }

    const handleLogin = (event: FormEvent<HTMLFormElement>) => {

    }

    return (
        <>
            <div className="flex flex-row justify-center items-center gap-10 min-h-screen w-full">
                {/* example <div class="bg-(--color-primary) text-[var(--color-foreground)]"></div> */}
                <div className="flex flex-col items-center bg-(--color-primary) p-8 border border-gray-100 rounded-xl gap-4 shadow-lg">
                    <h2 className="flex flex-col items-center text-center text-4xl font-bold text-gray-900 gap-2 mb-4">
                        {/* <span>¡Bienvenido</span>
                        <span>a</span>
                        <span>Afora!</span> */}
                        ¡Bienvenido a Afora!
                    </h2>
                    <p className="flex flex-col text-xl">Una app pensada para optimizar tu <span>día a día y acompañarte en cada jornada.</span></p>

                    <img
                        src="/logo.png"
                        alt="Logo de Afora"
                        className="h-100"
                    />
                </div>

                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl">Iniciar Sesión</h1>
                    </div>

                    <form onSubmit={handleLogin} className="flex flex-col justify-center items-start gap-4 ">
                        <label htmlFor="name" className="text-xl">Ingrese su nombre:</label>
                        <div className="flex flex-row items-center gap-3 border border-gray-300 rounded-xl px-4 bg-white focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all shadow-sm">
                            <div className="text-gray-400 shrink-0">
                                <UserCircle className="w-6 h-6" />
                            </div>

                            <div className="h-6 w-px bg-gray-200" />

                            <input
                                type="text"
                                className="w-full text-gray-800 placeholder-gray-400 py-3 bg-transparent focus:outline-none text-lg"
                                name="name"
                                placeholder="ej: Juan"
                            />
                        </div>

                        <label htmlFor="password" className="text-xl">Ingrese su contraseña:</label>
                        <div className="flex flex-row items-center gap-3 border border-gray-300 rounded-xl px-4 bg-white focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all shadow-sm">
                            <div className="text-gray-400 shrink-0" onClick={togglePasswordVisibility}>
                                {
                                    !showPassword ? (
                                        <Eye className="w-6 h-6" />
                                    ) : (
                                        <EyeClosed className="w-6 h-6" />
                                    )
                                }
                            </div>

                            <div className="h-6 w-px bg-gray-200" />

                            <input
                                type={!showPassword ? "text" : "password"}
                                className="w-full text-gray-800 placeholder-gray-400 py-3 bg-transparent focus:outline-none text-lg"
                                name="password"
                                placeholder=". . . . ."
                            />
                        </div>

                        <Button className={"bg-(--color-primary) hover:bg-(--color-primary-hover) self-center text-black text-xl px-18 py-5 mt-5 font-montserrat"}>Ingresar</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage
