import { useEffect, useState } from "react";
import IndNavbar from "../IndNavbar"
import "./queries.css"
import axios from "axios";

function Queries(){

    const [queries, setQueries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/admin_query');
                setQueries(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    return(
        <>
            <IndNavbar/>
            <div className="queries">
                <h1>Queries</h1><br/><div className="hr"></div><br/>
                <div className="admquery">
                    <ul>
                    {queries.map(query => (
                        <li key={query._id}>
                            <p>Name: {query.from}</p>
                            <p>Email: {query.email}</p>
                            <p>To Email: {query.toemail}</p>
                            <p>Query: {query.query}</p>
                            <br/>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Queries