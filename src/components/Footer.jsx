import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/Footer.module.css";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div class={style.footer}>
        <div class={style.container}>
          <div class={style.rowFooter}>
            <div class={style.footerCol}>
              <h4 class={style.title}>Sobre Nosotros</h4>
              <p class={style.about}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, cumque recusandae. Consectetur quia aliquid
                similique iure unde sint, dolores deleniti voluptas ad est
                temporibus, reiciendis nobis animi atque ipsam nostrum!
              </p>
            </div>
            <div class={style.footerCol + " ms-md-5"}>
              <h4 class={style.title}>Mapa del Sitio</h4>
              <ul>
                <li>
                  <Link class={style.link} to="/">
                    Boleteria Online
                  </Link>
                </li>
                <li>
                  <Link class={style.link} to="/movies">
                    Cartelera
                  </Link>
                </li>
                <li>
                  <Link class={style.link} to="/comingsoon">
                    Próximamente
                  </Link>
                </li>
                <li>
                  <Link class={style.link} to="/contact">
                    Contacto
                  </Link>
                </li>

                <li>
                  <Link class={style.link} to="/abm">
                    Administrador
                  </Link>
                </li>
              </ul>
            </div>
            <div class={style.footerCol + " ps-md-5"}>
              <h4 class={style.title}>Contáctanos</h4>
              <div class="social-links">
                <a
                  class={style.linkSocial}
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/"
                >
                  <FaFacebook />
                </a>
                <a
                  class={style.linkSocial}
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/?hl=es-la"
                >
                  <FaInstagram />
                </a>
                <Link class={style.linkSocial} to="/contact">
                  <FiMail />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.textCopy}>
        <p>Copyright &copy; 2021. Barzola - Etcheverry - Martin</p>
      </div>
    </>
  );
};

export default Footer;
