import BG from "../../Images/BG1.jpg";
import Footer from "../Footer";
import "./Style.css";
import React, { useState } from "react";
import { useRef } from "react";
import SearchAllData from "./SearchAllData";
import { NavLink } from "react-router-dom";
//
let arryData = [];

export default function Home() {
  const amiKhujsiRef = useRef();
  const boibahikObosthaRef = useRef();
  const bivagRef = useRef();
  //
  //search data state -
  const [s, setS] = useState(null);
  const [loading, setLoading] = useState(false);
  const FormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    function a(callback) {
      arryData = ["0"];
      callback();
    }
    function b() {
      const amiKhujsi = amiKhujsiRef.current.value;
      const boibahikObostha = boibahikObosthaRef.current.value;
      const bivag = bivagRef.current.value;

      //////////
      // setSerchState(arryData);

      fetch(
        process.env.REACT_APP_ALL_B
      )
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          const datas = [];
          for (let key in res) {
            datas.unshift({ ...res[key] });
          }
          // eslint-disable-next-line
          datas.map((data) => {
            if (
              data.পাত্র_পাত্রী !== amiKhujsi &&
              data.বৈবাহিক_অবস্থা === boibahikObostha &&
              data.বিভাগ === bivag
            ) {
              arryData.push(data);
              setS(arryData);
            } else {
            }
          });

          // eslint-disable-next-line
        })
        .catch((err) => console.log(err));
    }
    //
    a(() => b());
  };
  //
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
        <form action="" onSubmit={FormSubmit}>
          <div className="allLabel">
            <label htmlFor="">
              <span>আমি খুঁজছি</span>
              <div className="Select">
                <select name="search_Ami_Khujsi" ref={amiKhujsiRef} required>
                  <option value="পাত্র">পাত্রের তথ্য</option>
                  <option value="পাত্রী">পাত্রীর তথ্য</option>
                </select>
              </div>
            </label>
            {/*  */}
            <label htmlFor="">
              <span>বৈবাহিক অবস্থা</span>
              <div className="Select">
                <select
                  name="search_boibahik_obostha"
                  ref={boibahikObosthaRef}
                  required
                >
                  <option value="অবিবাহিত">অবিবাহিত</option>
                  <option value="বিবাহিত">বিবাহিত</option>
                  <option value="ডিভোর্সড">ডিভোর্সড</option>
                </select>
              </div>
            </label>
            {/*  */}
            <label htmlFor="">
              <span style={{ marginRight: "20px" }}>বিভাগ</span>
              <div className="Select">
                <select name="search_Bivag" ref={bivagRef}>
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
      </div>{" "}
      <br /> <br />
      {/*  */}
      {loading === true ? (
        <p style={{ color: "red", margin: "10px" }}>Loading...</p>
      ) : (
        <p> </p>
      )}
      {/*  */}
      {s === null ? (
        console.log("")
      ) : (
        <div>
          <div
            style={{
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
                marginBottom: "20px",
                borderRadius: "10px",
              }}
            >
              <p
                style={{
                  color: "whitesmoke",
                  fontSize: "18px",
                }}
              >
                আপনার কোনো বায়োডাটা পছন্দ হলে{" "}
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
                কপি করে আমাদের ফেসবুক পেইজে মেসেজ দিন।
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
      )}
      {s === null ? console.log("") : <SearchAllData datass={s} />}
      {/*  */}
      <div
        className="div3"
        style={{
          marginTop: "40px",
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
              fontSize: "25px",
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

 <div
        className="div3"
        style={{
          marginTop: "20px",
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
          <p
            to="allBiodata/"
            style={{
              padding: "20px",
              background: "linear-gradient(to right, blueviolet, purple)",
              width: "max-content",
              fontSize: "22px",
              color: "white",
              fontFamily: "SolaimanLipi",
              borderRadius: "5px",
            }}
          >
            {" "}
            বায়োডাটা ফরম পূরণ করে এপ্রুভ করাতে আমাদের ফেসবুক পেইজে মেসেজ দিন।
          </p>
        </div>
      </div>


      <div
        className="div3"
        style={{
          marginTop: "20px",
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
          <NavLink
            to="allBiodata/"
            style={{
              padding: "30px",
              background: "linear-gradient(to right, blueviolet, purple)",
              width: "max-content",
              fontSize: "25px",
              color: "white",
              fontFamily: "SolaimanLipi",
              borderRadius: "5px",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            {" "}
            সমস্ত বায়োডাটা দেখুন
          </NavLink>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <Footer />
    </div>
  );
}
