import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../index.css";
import { Link } from "react-router-dom";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<Link to="/" style={{color:'white',textDecoration:'none'}}>RMKCET</Link>
			<nav ref={navRef}>
				<Link to="/">Home</Link>
				<a href="#items">About</a>
				<a href="#placement">Placement</a>
				<a href="#companies">Companies</a>
				<div class="dropdown">
  					<button class="dropbtn">Login</button>
  					<div class="dropdown-content">
  					  <Link to="/admin_login">Admin</Link>
  					  <Link to="/faculty_login">Faculty</Link>
  					  <Link to="/student_login">Student</Link>
  					</div>
				</div>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;