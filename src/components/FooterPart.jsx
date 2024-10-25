import { Footer } from "flowbite-react";

function FooterPart() {
  return (
    <Footer container className="relative">
      <div className="w-full text-center ">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            name="Eleaning"
          />
          <Footer.LinkGroup className="cursor-pointer">
            <Footer.Link to="/about">About</Footer.Link>
            <Footer.Link to="/">Privacy Policy</Footer.Link>
            <Footer.Link to="/course">Course</Footer.Link>
            <Footer.Link to="/about">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
      </div>
    </Footer>
  );
}

export default FooterPart;
