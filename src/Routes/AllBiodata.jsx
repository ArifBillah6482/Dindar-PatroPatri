import { useEffect, useState } from "react";
import AllBiodata from "../components/AllBiodata";
import Footer from "../components/Footer";


export default function AllBiodataRoute() {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://dindar-patro-patri-default-rtdb.firebaseio.com/AllBiodata.json"
    )
      .then((res) => res.json())
      .then((res) => {
        const datas = [];
        for (let key in res) {
          datas.unshift({ ...res[key] });
          setAllData(datas);
        }
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1
        style={{ color: "purple", fontWeight: "normal", textAlign: "center" }}
      >
        {loading ? <>Loading...</> : console.log()}
      </h1>
      {allData && <AllBiodata allData={allData} />}      
     <div>      
        <Footer />
      </div>
    </div>
  );
}
