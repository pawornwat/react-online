import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";

export default function AboutPage() {
  const [version, setVersion] = useState("");
  useEffect(() => {
    async function getData() {
      const resp = await axios.get(
        "https://api.codingthailand.com/api/version"
      );
      console.log(resp.data);
      setVersion(resp.data.data.version);
    }
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>About</h2>
          <p>Backend API Version {version}</p>
        </div>
      </div>
    </div>
  );
}
