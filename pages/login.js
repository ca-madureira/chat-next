import { IoLogoGoogle, IoLogoFacebook } from 'react-icons/io';
import Link from 'next/link';

const Login = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center bg-c1">
      <div className="flex items-center flex-col w-[600px]">
        <div className="text-center">
          <div className="text-4xl font-bold">Login com sua conta</div>
          <div className="mt-3 text-c3">
            Conecte-se e converse com seus amigos
          </div>
        </div>

        <div className="flex items-center gap-2 w-full mt-10 mb-5">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-1/2 h-14 rounded-md cursor-pointer p-[1px]">
            <div className="flex items-center justify-center gap-3 text-white font-semibold bg-c1 w-full h-full rounded-md">
              <IoLogoGoogle size={24} />
              <span>Login com Google</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-1/2 h-14 rounded-md cursor-pointer p-[1px]">
            <div className="flex items-center justify-center gap-3 text-white font-semibold bg-c1 w-full h-full rounded-md">
              <IoLogoFacebook size={24} />
              <span>Login com Facebook</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <span className="w-5 h-[1px] bg-c3"></span>
          <span className="text-c3 font-semibold">Ou</span>
          <span className="w-5 h-[1px] bg-c3"></span>
        </div>

        <form className="flex flex-col items-center gap-3 w-[500px] mt-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full h-14 bg-c5 rounded-xl outline-none border-none px-5 text-c3"
            autoComplete="off"
          />
          <input
            type="password"
            placeholder="Senha"
            className="w-full h-14 bg-c5 rounded-xl outline-none border-none px-5 text-c3"
            autoComplete="off"
          />
          <div className="text-right w-full text-c3">
            <span className="cursor-pointer">Esqueceu a senha?</span>
          </div>
          <button className="mt-4 w-full h-14 rounded-xl outline-none text-base font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Login
          </button>
        </form>

        <div className="flex jusitify-center gap-1 text-c3 mt-5">
          <span>Ainda não tem conta?</span>
          <Link
            href="/register"
            className="font-semibold text-white underline underline-offset-2 cursor-pointer"
          >
            Registre-se
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
