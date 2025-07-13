import LogoImage from "../assets/images/logo.svg";

function Logo() {
  return (
    <img
      src={LogoImage}
      alt="Splitter logo"
      className="mx-auto w-[100px] md:w-[120px]"
    />
  );
}

export default Logo;
