const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-center items-center lg:justify-between flex-wrap gap-10">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <a href="https://github.com/PrtHub" target="_blank" rel="noreferrer" className="social-icon">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </a>
          <a href="https://x.com/PritamGhosh010" target="_blank" rel="noreferrer" className="social-icon">
            <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
          </a>
          <a href="https://www.linkedin.com/in/pritam-ghosh-dev" target="_blank" rel="noreferrer" className="social-icon">
            <img src="/assets/linkedin3.svg" alt="linkedin" className="w-1/2 h-1/2" />
          </a>
        </div>
  
        <p className="text-white-500">© 2024 Pritam Ghosh. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;