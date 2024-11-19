import React from "react";
import {HeaderArea} from './styled';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderArea>
      <div className="container">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </HeaderArea>

  );
}
export default Header;