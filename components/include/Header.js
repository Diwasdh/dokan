/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { BsFillCartFill } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { Navbar, Container, Nav } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

export default function header() {
    return (
        <>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">
                        {" "}
                        <img src="/logo.ico" alt="Logo" className={"icon"} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Nav.Link href="/products">Products</Nav.Link>
                            <Nav.Link href="#action1" className="nav-link">
                                About Us
                            </Nav.Link>
                            <Nav.Link href="/faq">FAQ&apos;S</Nav.Link>
                            <Nav.Link href="/support">Support</Nav.Link>
                            <Nav.Link href="/contact-us">Contact us</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search for..."
                                className="me-2 m-0"
                                aria-label="Search"
                            />
                        </Form>
                        <Nav.Link href="#action2" className="cart">
                            <BsFillCartFill size="20px" />
                        </Nav.Link>
                        <Nav.Link href="/login" className="profile">
                            <BsPersonCircle size="20px" />
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
