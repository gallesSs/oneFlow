import logo from "/Header/logo.svg";
import lang from "/Header/lang.svg";

const Header = () => {
  return (
    <header className="flex font-sans py-5 px-4 justify-between">
      <a className="ml-3 cursor-pointer" href="/">
        <img src={logo} alt="" />
      </a>
      <div className="flex justify-center items-center">
        <nav>
          <ul className="flex justify-center items-center gap-8 text-[#013A4C] leading-5 mr-8">
            <li className="mr-[30px]">
              <a href="#Hero">Why Oneflow?</a>
            </li>
            <li className="mr-[30px]">
              <a href="#Learn">Learn</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </nav>
        <ul className="flex justify-center items-center gap-2">
          <li>
            <button className="w-[114px] cursor-pointer rounded-[4px] border border-[#FFD063] h-10 bg-[#FFD063]">
              Get a demo
            </button>
          </li>
          <li>
            <button className="h-10 cursor-pointer w-[75px] border border-[#346170] rounded-[4px]">
              Log in
            </button>
          </li>
        </ul>
        <img className="ml-12" src={lang} alt="" />
      </div>
    </header>
  );
};

export default Header;
