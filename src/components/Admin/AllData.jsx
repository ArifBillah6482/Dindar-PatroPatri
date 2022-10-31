import Biodata from "./Biodata";

export default function AllallData({ allData }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {allData.map((data) => {
        const newData = {
          data,
          id: Math.random(),
        };
        return <Biodata {...newData} key={newData.id} />;
        /////////////////////////
      })}
    </div>
  );
}
