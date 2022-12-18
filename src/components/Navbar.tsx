import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

const Navbar = () => {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3" sticky="top">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/store">
            Store
          </Nav.Link>
          <Nav.Link as={NavLink} to="/About">
            About
          </Nav.Link>
        </Nav>
        <IconButton>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
