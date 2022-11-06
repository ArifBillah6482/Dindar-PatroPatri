import SearchData from "./SearchData";

export default function SearchAllData(props) {
  const a = props.datass.slice(1);

  return (
    <div
      style={{
        display: "grid",
      }}
      className="search_all_data_main_div"
    >
      {a.map((data) => {
        // console.log(data);
        return <SearchData ab={data} key={Math.random()} />;
      })}
    </div>
  );
}
