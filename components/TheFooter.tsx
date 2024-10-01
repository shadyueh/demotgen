import { FooterBrand, FooterCopyright } from "flowbite-react";

export default function TheFooter() {
  return (
    <footer className="bottom-0 w-full p-2 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-4 dark:bg-gray-800 dark:border-gray-600">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            name="Flowbite"
          />
          <FooterCopyright href="#" by="Flowbite™" year={2022} />
        </div>
      </div>
    </footer>
  );
}