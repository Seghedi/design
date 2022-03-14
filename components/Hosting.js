import { CheckIcon, StarIcon } from "@heroicons/react/solid";

const vercel_features = [
  {
    id: 1,
    name: "100GB bandwidth",
  },
  {
    id: 2,
    name: "100 000 daily requests",
  },
  {
    id: 3,
    name: "Unlimited projects",
  },
  {
    id: 4,
    name: "6 000 minutes b.e.",
  },
  {
    id: 5,
    name: "1 build at a time",
  },
];

const netlify_features = [
  {
    id: 1,
    name: "100GB bandwidth",
  },
  {
    id: 2,
    name: "125 000 requests",
  },
  {
    id: 3,
    name: "Unlimited projects",
  },
  {
    id: 4,
    name: "300 minutes b.e.",
  },
  {
    id: 5,
    name: "1 build at a time",
  },
];

const cloudflare_features = [
  {
    id: 1,
    name: "Unlimited bandwidth",
  },
  {
    id: 2,
    name: "Unlimited requests",
  },
  {
    id: 3,
    name: "Unlimited projects",
  },
  {
    id: 4,
    name: "500 builds per month",
  },
  {
    id: 5,
    name: "1 build at a time",
  },
];

export default function Hosting() {
  return (
    <>
      <h3 className="text-center font-extrabold text-3xl mb-1 mt-20">
        Best <span>hosting</span> providers?
      </h3>
      <p className="text-center font-medium mb-2">
        We got you.
      </p>
      <p className="text-center font-medium my-10 text-sm">
        just take a look below.
      </p>

      <div className="flex flex-col md:flex-row justify-center md:space-x-32 md:space-y-0 space-y-10 align-middle items-center content-center w-full mb-20">
        <a href="https://vercel.com/" rel="noopener noreferrer" target="_blank">
          <img
            src="vercel_logo.png"
            className="h-14 p-2 mt-3 rounded border-2 border-black border-solid shadow transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md"
          />
          <div className="mt-4">
            <ul>
              {vercel_features.map((feature) => (
                <li key={feature.id}>
                  <div className="flex flex-row items-center mt-3">
                    <CheckIcon className="h-5 text-green-600 mr-2" />
                    <span>{feature.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </a>
        <a className="md:pb-10" href="https://pages.cloudflare.com/" rel="noopener noreferrer" target="_blank">
          <div className="flex flex-col text-center transition duration-300 ease-in-out hover:-translate-y-1">
              <span className="bg-green-600 mx-7 static text-white font-bold z-0 rounded-tr rounded-tl py-1">
                  Our favourite
              </span>
            <img src="cloudflare.svg" className="static h-16 rounded bg-white shadow-green-500 border-2 z-100 border-green-600 scale-110 shadow-md border-solid" />
          </div>
          <div className="mt-4">
            <ul>
              {cloudflare_features.map((feature) => (
                <li key={feature.id}>
                  <div className="flex flex-row items-center mt-3">
                    <CheckIcon className="h-5 text-green-600 mr-2" />
                    <span>{feature.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </a>
        <a href="https://netlify.com/" rel="noopener noreferrer" target="_blank">
          <img src="netlify.svg" className="h-14 p-2 mt-3 rounded shadow transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md hover:shadow-blue-300 border-2 border-blue-300 border-solid" />
          <div className="mt-4">
            <ul>
              {netlify_features.map((feature) => (
                <li key={feature.id}>
                  <div className="flex flex-row items-center mt-3">
                    <CheckIcon className="h-5 text-green-600 mr-2" />
                    <span>{feature.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </a>
      </div>
    </>
  );
}
