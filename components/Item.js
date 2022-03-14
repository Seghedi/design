import { CursorClickIcon, BadgeCheckIcon } from "@heroicons/react/solid";

export default function Item(props) {
  return (
    <div className="flex flex-col mb-5">
      <div className="bg-black z-10">
        <span className="cursor-pointer">
          <img
            className="transition duration-300 ease-in-out hover:-translate-y-3 hover:translate-x-3 border-2 border-black"
            src={props.img}
          />
        </span>
      </div>
      <div className="flex flex-row justify-center">
        <span className="bg-black z-0 text-white font-semibold pb-2 px-4 pt-1 rounded-bl flex flex-row items-center">
        <BadgeCheckIcon className="h-4 mr-1" />

          {props.name}
        </span>
        <a
          href={props.link}
          rel="noopener noreferrer"
          target="_blank"
          className="bg-white justify-center align-middle content-center items-center z-0 flex flex-row cursor-pointer text-black border-dashed border-black border-2 border-l-0 border-t-0 font-semibold pb-2 px-4 pt-1 rounded-br"
        >
          <CursorClickIcon className="h-4 mr-1" />
          <span>Import</span>
        </a>
      </div>
    </div>
  );
}
