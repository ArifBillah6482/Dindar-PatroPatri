import { useEffect, useState } from "react";
import AllData from "./AllData";
//  `https://dindar-patro-patri-default-rtdb.firebaseio.com/PendingBiodata.json`
export default function Admin() {
  // eslint-disable-next-line

  const [allData, setAllData] = useState(null);

  useEffect(() => {
    fetch(
     process.env.REACT_APP_ADMIN_API
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
