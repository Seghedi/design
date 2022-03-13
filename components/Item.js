

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
        <span className="bg-black z-0 text-white font-semibold pb-2 px-4 pt-1 rounded-bl">{props.name}</span>
        <span className="bg-white z-0 cursor-pointer text-black border-dashed border-black border-2 border-l-0 border-t-0 font-semibold pb-2 px-4 pt-1 rounded-br">{props.type}</span>
      </div>
    </div>
  );
}
