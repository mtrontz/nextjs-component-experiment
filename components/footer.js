import { useState, useEffect, useContext } from "react";

const links = [{
  to: "Home",
  href: "/",
  svgPath: "M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"
},
{
  to: "Facebook",
  href: "https://www.facebook.com",
  svgPath: "M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"
}];

const styles = {
  footer: "bg-primary-dark-blue py-10",
  cont: "container",
  grid: "text-center grid grid-cols-1 justify-items-center gap-6 lg:grid-cols-12 lg:gap-0",
  flex: "flex flex-col justify-between lg:justify-self-start lg:col-span-3",
  logo: "mb-7",
  wrapper: "flex justify-between items-center",
  svg: "text-white hover:text-green-400 fill-current cursor-pointer"
};

export default function Footer() {
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.cont}>
        <div className={styles.grid}>
          <div className={styles.flex}>
            <img
              className={styles.logo}
              src="images/logo-white.svg"
              alt="logo" />
              <div className={styles.wrapper}>
                {links.map(({ to, href, svgPath }, i) => svgPath ? (
                <svg 
                  key={i}
                  className={styles.svg}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                >
                  <title>{to}</title>
                  <path d={svgPath} />
                </svg>
                ) : null)}
              </div>  
          </div>  
        </div>  
      </div>  
    </footer>  
    </>
  );
}