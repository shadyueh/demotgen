import { Footer, FooterBrand, FooterCopyright } from "flowbite-react";

export default function TheFooter() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            name="Flowbite"
          />
        </div>
        <FooterCopyright href="#" by="Flowbite™" year={2022} />
      </div>
    </Footer>
  );
}