import logo from "../assets/images/logo.svg";

export default function Hero() {
  return (
    <section>
      <div className="section-container mb-40 px-10 pt-16">
        <img src={logo} alt="logo" className="mx-auto my-16 " />

        <h3 >
          A history of everthing you copy
        </h3>
        <p className="max-w-3xl mx-auto leading-9 text-center text-grayishBlue mb-10 text-2xl">
          Clipboard allows you to track and organize everthing you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <div className="button-container" >
          <a className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80">Download for iOS</a>
          <a className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80">Download for Mac</a>
        </div>
      </div>
    </section>
  );
}
