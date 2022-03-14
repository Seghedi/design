export default function Footer() {
  return (
    <>
      <footer className="p-4 md:mx-10 mx-5 bg-white md:flex md:items-center md:justify-between md:p-6 mb-5 text-center">
        <span className="text-sm text-black sm:text-center ">
          &copy; 2022{" "}
          <a href="https://seghedi.com" rel="noopener noreferrer" target="_blank" className="font-extrabold">
            seghedi.com
          </a>
          . All rights reserved.
        </span>
        <ul className="flex flex-row border-2 border-dashed border-black p-2 rounded-xl items-center mt-3 text-sm text-black  sm:mt-0">
          <li>
            <a href="#" rel="noopener noreferrer" target="_blank" className="mr-4 font-extrabold md:mr-6">
              About
            </a>
          </li>
          <li>
            <a href="#" rel="noopener noreferrer" target="_blank" className="mr-4 font-extrabold md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" rel="noopener noreferrer" target="_blank" className="mr-4 font-extrabold md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" rel="noopener noreferrer" target="_blank" className="font-extrabold">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
