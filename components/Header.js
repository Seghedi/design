import HeroTitle from "./HeroTitle";
import Link from 'next/link';
import { Prism } from '@mantine/prism';

export default function Header() {
  const demoCode = `import { Quality } from 'design.seghedi.com';

function BeUnique() {
  return <Button>Use our designs.</Button>
}`;
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <Link href="/" className="cursor-pointer">
          <img src='https://scloud-assets.s3.eu-central-1.amazonaws.com/logo.svg' className="h-10 w-10" />
        </Link>
        <HeroTitle />
        <span className="mt-2 mx-4 font-semibold text-center">
          A top-quality collection of modern web templates, built on top of{" "}
          <span className="underline decoration-purple-500 decoration-2">
            NextJS &amp; TailwindCSS
          </span>
          .
        </span>
        <a
          href="#"
          className="border-2 border-dashed border-purple-500 font-bold px-4 py-2 text-purple-500 mt-4 rounded-xl transition duration-300 ease-in-out hover:bg-purple-500 hover:text-white"
        >
          Create your site
        </a>
        
        <Prism
          className="mx-10 mt-10 cursor-pointer shadow-md"
          colorScheme="dark"
          noCopy
          language="tsx"
        >
          {demoCode}
        </Prism>
      </div>
    </>
  );
}
