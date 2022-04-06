import { useEffect } from "react";
import axios from "axios";

export default function LandingPage() {
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/hello")
      .then((response) => console.log(response.data));
  }, []);
  return <div>LandingPage</div>;
}
