import Link from "next/link";
import Image from "next/image";
import { Container, Nav, Navbar } from "react-bootstrap";

const Menubar = () => {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Link href="/">
          <a className="mt-1 navbar-brand">
            <Image
              src="/favicon.png"
              height="35px"
              width="35px"
              className="logo"
              alt=""
            />
          </a>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="link ms-2">
              <Link href="/login">
                <a className="nav-link" aria-current="page">
                  Login
                </a>
              </Link>
            </Nav.Link>
            <Nav.Link className="link ms-2">
              <Link href="/signup">
                <a className="nav-link" aria-current="page">
                  Signup
                </a>
              </Link>
            </Nav.Link>
            <Nav.Link className="link ms-2">
              <Link href="/create">
                <a className="nav-link" aria-current="page">
                  Create
                </a>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;
