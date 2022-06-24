import { useState } from "react";

const navItems = ['Home', 'About', 'Contact', 'Blog', 'Careers'];

const styles = {
  wrapper: "fixed z-50 top-0 w-full bg-white",
  container: "container flex justify-between items-center z-20",
  nav: "my-5 lg:my-6",
  items: "hidden lg:block text-sm text-neutral-grayish-blue",
  links: "mx-3 py-5 hover:gradient-border-bottom",
  buttons: {
    invite: "hidden lg:block bg-primary-lime-green px-7 py-3 rounded-full text-neutral-white text-xs bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan hover:button-brightness focus:outline-none focus:ring ring-green-400",
    menu: "lg:hidden focus:outline-none"
  },
  modal: {
    wrapper: `fixed inset-0 z-30 bg-gray-800 
          bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`,
    container: "bg-white text-primary-dark-blue flex flex-col text-center mx-5 my-20 py-4 rounded",
    item: "py-2"      
  }

};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className={styles.wrapper}>
      <nav className={styles.container}>
        <div className={styles.nav}>
          <img src="/images/logo.svg" alt="logo" />
        </div>  
        <div className={styles.items}>
          {navItems.map((navItem) => (
            <a className={styles.links} href="#">
              {navItem}
            </a>  
          ))}
        </div>  
        <button className={styles.buttons.invite}>
          Request Invite
        </button>  
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={styles.buttons.menu}>
            <img
              className={`${isOpen && 'hidden'}`}
              src="/icons/icon-hamburger.svg"
              alt="" />
            <img 
              className={isOpen ? 'block' : 'hidden'}
              src="/icons/icon-close.svg"
              alt="close" />
        </button>    
      </nav>
      </div>
      {/* Modal */}
      <div className={styles.modal.wrapper}>
        <div className={styles.modal.container}>
          {navItems.map((navItem) => (
            <a 
              key={navItem}
              className={styles.modal.item} href="#">
                {navItem}
            </a>    
          ))}
        </div>  
      </div>  
    </>
  );
}