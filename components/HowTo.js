import { ArrowCircleDownIcon } from "@heroicons/react/solid";

export default function HowTo() {
  return (
    <>
      {/* <div className="flex justify-center flex-col text-center mb-10">
        <QuestionMarkCircleIcon className="h-32" />
        <span className="font-extrabold text-3xl">
        Is this real?
        </span>
        <span>
            Actually, yes.
        </span>
      </div> */}
      {/* <sad></sad> */}
      <div className="flex justify-center">
          <ArrowCircleDownIcon className="h-10 mb-10 animate-bounce shadow-md shadow-pink-500 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full" />
        </div>
      <div className="flex justify-center">
          <span className="font-extrabold text-4xl decoration-4 underline mb-2 decoration-pink-500">
              Is this real? Yes!
          </span>
      </div>
      <div className="grid grid-cols-2">
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-3xl font-extrabold p-10">
          Ok, but how?
        </span>
        <div className="flex flex-col border-t-2 border-black border-solid p-5 align-middle content-center justify-center">
          <span className="font-bold text-xl ">Simple.</span>
          <span className="">
            Simply click the <span className="font-bold">Import</span> button.
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col border-b-2 border-black border-solid p-5 align-middle content-center justify-center">
          <span className="font-bold text-xl ">One account.</span>
          <span className="">
            Let's keep things simple. Manage all your code from your Github
            account.
          </span>
        </div>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com"
          className="bg-black text-white text-3xl font-extrabold p-10 flex align-middle items-center hover:underline justify-center md:justify-start"
        >
          Github
        </a>
      </div>
      <div className="grid grid-cols-2">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://cloudflare.com"
          className="bg-black hover:underline text-white text-3xl font-extrabold p-10 flex align-middle items-center justify-center md:justify-start"
        >
          Cloudflare
        </a>
        <div className="flex flex-col border-b-2 border-black border-solid p-5 align-middle content-center justify-center">
          <span className="font-bold text-xl ">Secure.</span>
          <span className="">
            Cloudflare will take care of your security - no headaches or problems.
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col border-b-2 border-black border-solid p-5 align-middle content-center justify-center">
          <span className="font-bold text-xl ">The host.</span>
          <span className="">
            You need a warehouse to store your treasure in. Check our providers.
          </span>
        </div>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://vercel.com"
          className="bg-black text-white text-3xl font-extrabold p-10 flex align-middle items-center hover:underline justify-center md:justify-start"
        >
          Vercel
        </a>
      </div>
    </>
  );
}
