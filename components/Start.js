import TypeAnimation from "react-type-animation";
import Item from "./Item";

export default function Start() {
    return (
      <>
        <div className="flex md:flex-row flex-col items-center align-middle justify-center md:m-20 mt-10 mb-10 mx-5">
          <h1 className="font-extrabold z-0 text-3xl md:text-4xl text-white py-2 px-5 bg-gradient-to-r from-purple-500 to-purple-700 shadow-md shadow-purple-500 rounded justify-center align-middle text-center">
            <span>
              Gallery
            </span>
          </h1>
        </div>
        <div className="grid gap-4 md:grid-cols-3 grid-cols-1 py-2.5 rounded mb-10 mx-10 justify-center align-middle content-center text-center">
          <Item img="socials.png" />
          <Item img="clubs.png" />
          <Item img="cje.png" />
          
          </div>
      </>
    );
  }
  