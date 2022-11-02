import Biodatas from "./Biodatas";
import "./Style.css";
export default function AllBiodata(props) {
  return (
    <div>
      <div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: " linear-gradient(to right, blueviolet, blue)",
              padding: "20px 0",
              width: "395px",
              textAlign: "center",
              boxShadow: "0 0 5px blue",
              marginTop: "20px",
              marginBottom: "10px",
              borderRadius: "10px",
            }}
          >
            <p
              style={{
                color: "whitesmoke",
                fontSize: "18px",
              }}
            >
              আপনার কোনো বায়োডাটা ফছন্দ হলে{" "}
              <span
                style={{
                  fontSize: "20px",
                  color: "white",
                  padding: "0 5px",
                  display: "inline-block",
                }}
              >
                “ফরম আইডি”
              </span>{" "}
              কপি করে আমাদের পেইজে মেসেজ দিন।
            </p>{" "}
            <br />
            <a
              href="/"
              style={{
                color: "white",
                textUnderlineOffset: "5px",
                padding: "12px 15px",
                border: "1px solid rgb(116, 116, 116)",
                borderRadius: "5px",
              }}
            >
              আামদের পেইজে যেতে এখানে ক্লিক করুন
            </a>
          </div>{" "}
          <div
            style={{
              background: " linear-gradient(to right, blueviolet, purple)",
              color: "white",
              padding: "20px 70px",
              marginTop: "20px",
              marginBottom: "30px",
              fontSize: "22px",
              borderRadius: "5px",
              boxShadow: "0 0 5px purple",
            }}
          >
            <p>
              সমস্ত বায়োডাটা{" "}
              <span style={{ fontSize: "30px", marginLeft: "10px" }}>⬇</span>
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {props.allData.map((data) => {
          return <Biodatas data={data} key={Math.random()} />;
        })}
      </div>
    </div>
  );
}
