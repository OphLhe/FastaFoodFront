import { Button } from "react-bootstrap";
import imageFastaFood from "../assets/logo_fastaFood.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEmployee } from "../Services/employeeService";

function Navbar() {
  const navigate = useNavigate();

  const logout = async () => {
    localStorage.removeItem("token");
    alert("Déconneté.e avec succés");
    navigate("/");
  };

  const token = () => {
    localStorage.getItem("token");
  };

  const [employeeInfos, setEmployeeInfos] = useState([]);

  const fetchEmployeeInfos = async () => {
    try {
      const res = await getEmployee();
      setEmployeeInfos(res.data[0]);
    } catch (error) {
      console.error("Error fetching employee infos");
    }
  };

  useEffect(() => {
    fetchEmployeeInfos();
  }, []);

  return (
    <>
      <div className="headerWelcome">
        <img
          className="logoWelcome"
          src={imageFastaFood}
          onClick={() => {
            token ? navigate("/employee/welcome") : navigate("/");
          }}
        />
        <h1 className="welcomeTitle">
          Welcome {employeeInfos.firstName}<br /> 
          "{employeeInfos.role}"
        </h1>
        <div className="welcomeButtons">
          <Button className="headerButtons" onClick={logout}>
            Déconnexion
          </Button>
          <Button
            className="headerButtons"
            onClick={() => {
              navigate("/employee");
            }}
          >
            Compte
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
