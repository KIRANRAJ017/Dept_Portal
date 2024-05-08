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
				<Link to="/faculty_home">Home</Link>
				<Link to="/faculty_internal">Internal</Link>
				<Link to="/faculty_achivement">Achievement</Link>
				<Link to="/faculty_report">Report</Link>
				<Link to="/faculty_query">Query</Link>
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