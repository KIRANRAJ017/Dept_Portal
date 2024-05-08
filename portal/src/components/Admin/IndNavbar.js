import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../index.css";
import { Link } from "react-router-dom";

function IndNavbar() {
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
				<Link to="/admin_home">Home</Link>
				<Link to="/admin_members">Members</Link>
				<Link to="/admin_report">Result</Link>
				<Link to="/admin_query">Queries</Link>
  				<Link to="/">Logout</Link>
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

export default IndNavbar;