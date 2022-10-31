import { useEffect, useState } from "react";
import AllData from "./AllData";

export default function Admin() {
  // eslint-disable-next-line

  const [allData, setAllData] = useState(null);

  useEffect(() => {
    fetch(
      `https://dindar-patro-patri-default-rtdb.firebaseio.com/PendingBiodata.json`
    )
      .then((res) => res.json())
      .then((res) => {
        const datas = [];
        for (let key in res) {
          datas.unshift({ ...res[key] });
          setAllData(datas);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  // eslint-disable-next-line

  return <div>{allData && <AllData allData={allData} />}</div>;
}
