import BG from "../../Images/BG1.jpg";
import Footer from "../Footer";
import "./Style.css";
export default function Home() {
  return (
    <div className="HomePage">
      <div className="div1">
        {" "}
        <img src={BG} alt="" />
        <p>দ্বীনদার পাত্র/পাত্রীর সন্ধান</p>
      </div>
      {/*  */}
      {/*  */}
      <div className="div2">
        <p
          style={{
            position: "absolute",
            color: "white",
            fontSize: "25px",
            marginTop: "15px",
            borderBottom: "2px solid whitesmoke",
          }}
        >
          পাত্র/পাত্রীর তথ্য খুজুন
        </p>
        {/*  */}
        <form action="">
          <div className="allLabel">
            <label htmlFor="">
              <span>আমি খুঁজছি</span>
              <div className="Select">
                <select name="search_Ami_Khujsi" id="" required>
                  <option value="সকল_তথ্য">সকল তথ্য</option>
                  <option value="পাত্রের_তথ্য">পাত্রের তথ্য</option>
                  <option value="পাত্রীর_তথ্য">পাত্রীর তথ্য</option>
                </select>
              </div>
            </label>
            {/*  */}
            <label htmlFor="">
              <span>বৈবাহিক অবস্থা</span>
              <div className="Select">
                <select name="search_boibahik_obostha" id="" required>
                  <option value="অবিবাহিত">অবিবাহিত</option>
                  <option value="বিবাহিত">বিবাহিত</option>
                  <option value="ডিভোর্সড">ডিভোর্সড</option>
                  <option value="বিপত্নীক">বিপত্নীক</option>
                  <option value="বিধবা">বিধবা</option>
                </select>
              </div>
            </label>
            {/*  */}
            <label htmlFor="">
              <span style={{ marginRight: "20px" }}>বিভাগ</span>
              <div className="Select">
                <select name="search_Bivag" id="">
                  <option value="">সিলেক্ট করুন</option>
                  <option value="ঢাকা">ঢাকা</option>
                  <option value="চট্রগ্রাম">চট্রগ্রাম</option>
                  <option value="খুলনা">খুলনা</option>
                  <option value="বরিশাল">বরিশাল</option>
                  <option value="রংপুর">রংপুর</option>
                  <option value="রাজশাহী">রাজশাহী</option>
                  <option value="সিলেট">সিলেট</option>
                  <option value="ময়মনসিংহ">ময়মনসিংহ</option>
                </select>
              </div>
            </label>
            {/*  */}
          </div>
          {/*  */}
          <button
            type="submit"
            className="AnimatedBtnPurple"
            style={{
              padding: "10px 30px",
              marginTop: "30px",
              marginLeft: "10px",
              boxShadow: "0 0 5px white",
              width: "200px",
            }}
          >
            <span> 🔍 </span>
            <span>তথ্য খুজুন</span>
          </button>
        </form>
      </div>
      {/*  */}
      {/*  */}
      <div
        className="div3"
        style={{
          marginTop: "50px",
          marginBottom: "10px",
          width: "100%",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a
            style={{
              padding: "30px",
              background: "linear-gradient(to right, blueviolet, purple)",
              width: "max-content",
              fontSize: "40px",
              color: "white",
              fontFamily: "SolaimanLipi",
              borderRadius: "5px",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            href="https://dindar-patropatri-form.netlify.app"
          >
            আপনার বায়োডাটা তৈরি করুন
          </a>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <Footer />
    </div>
  );
}
