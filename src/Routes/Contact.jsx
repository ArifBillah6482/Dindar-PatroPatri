import Footer from "../components/Footer";

export default function ContactRoute() {
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "100px",
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
                padding: "10px 15px",
              }}
            >
              আমাদের সাথে যোগাযোগ করতে আমাদের ফেসবুক পেইজে মেসেজ দিন।
            </p>{" "}
            <br />
            <a
              href="https://www.facebook.com/DeendarPatraPatriPandhan"
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
        </div>
      </div>
      <p
        style={{
          marginTop: "100vh",
        }}
      >
        <Footer />
      </p>
    </div>
  );
}
