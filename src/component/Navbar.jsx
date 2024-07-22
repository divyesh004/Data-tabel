import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";

function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row position-fixed">
        </div>
      </div>
    </div>
  );
}

export default Navbar;
