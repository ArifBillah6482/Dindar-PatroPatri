function Footer() {
  return (
    <div>
      <div
        className="div5"
        style={{
          marginTop: "100px",
          background: "linear-gradient(to right, blueviolet, purple, darkblue)",
          padding: "20px",
          textAlign: "center",
          width: "100%",
        }}
      >
        <footer style={{ color: "white" }}>
          <p
            style={{
              padding: "10px 0",
              fontSize: "18px",
              fontFamily: "consolas",
            }}
          >
            Copyright <span style={{ fontSize: "20px" }}>©</span> 2022. All
            Rights Reserved.
          </p>{" "}
          <br />
          <span
            style={{
              padding: "10px 0",
              fontSize: "18px",
              fontFamily: "consolas",
            }}
          >
            {" "}
            Developer:-
          </span>{" "}
          <span>
            <a
              style={{
                color: "white",
                fontSize: "18px",
                fontFamily: "consolas",
                border: "1px solid rgb(140, 140, 140)",
                padding: "7px 15px",
                borderRadius: "5px",
              }}
              href="https://facebook.com/arifbillah64"
            >
              Arif Billah
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
}
///////
export default Footer;
