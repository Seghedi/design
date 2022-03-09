export default function Item(props) {
  return (
    <>
      <span className="transition duration-300 ease-in-out hover:-translate-y-2 cursor-pointer">
        <img src={props.img} />
      </span>
    </>
  );
}
