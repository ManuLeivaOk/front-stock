import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="p-4 bg-blue-800 text-white flex flex-column justify-content-center">
      <div className="mb-4 md:mb-0 w-full flex flex-column justify-content-center align-items-center">
        <h3 className="text-lg font-bold">Síguenos</h3>
        <div className="flex space-x-4 flex flex-row">
          <SocialIcon
            url="https://facebook.com"
            network="facebook"
            style={{ height: 35, width: 35, margin: '0px 5px' }}
          />
          <SocialIcon
            url="https://twitter.com"
            network="twitter"
            style={{ height: 35, width: 35, margin: '0px 5px' }}
          />
          <SocialIcon
            url="https://instagram.com"
            network="instagram"
            style={{ height: 35, width: 35, margin: '0px 5px' }}
          />
          <SocialIcon
            url="https://linkedin.com"
            network="linkedin"
            style={{ height: 35, width: 35, margin: '0px 5px' }}
          />
        </div>
      </div>
      <div className="text-center mt-4">
        <p>
          &copy; {new Date().getFullYear()} Municipio de Laguna Larga. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
