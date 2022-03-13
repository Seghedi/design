import Item from "./Item";
import { ArrowCircleDownIcon } from '@heroicons/react/solid'

export default function Start() {
    return (
      <>
        {/* <div className="flex md:flex-row flex-col items-center align-middle justify-center md:m-10 md:mx-96 mt-10 mb-10 mx-5 border-orange-400 border-2 border-dashed rounded-xl">
          <h1 className="font-semibold z-0 flex flex-col justify-center content-center text-3xl md:text-2xl text-black py-2 px-5justify-center align-middle text-center">
            <span>
              Perfectly <x className='text-orange-400'>working</x> with
            </span>

            <a href='https://pages.cloudflare.com' className="flex flex-col justify-center"><img src='cloudflare.svg' className=" h-16 mt-3 rounded" /></a>
            <span className="text-sm">And yeah - for <span className="text-orange-400">free</span></span>
          </h1>
        </div> */}
        <div className="flex justify-center mt-12">
          <ArrowCircleDownIcon className="h-10 mb-10 animate-bounce bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full" />
        </div>
        <div className="grid gap-4 md:grid-cols-3 grid-cols-1 py-2.5 rounded mb-10 mx-10 justify-center align-middle content-center text-center">
          <Item img="p1.png" name="demo 1" type="Shopping" />
          <Item img="p1.png" name="demo 2" type="Blog" />
          <Item img="p1.png" name="demo 3" type="Personal" />
          <Item img="p1.png" name="demo 3" type="Personal" />
          <Item img="p1.png" name="demo 3" type="Personal" />
          <Item img="p1.png" name="demo 3" type="Personal" />
          <Item img="p1.png" name="demo 3" type="Personal" />
          
          </div>
      </>
    );
  }
  