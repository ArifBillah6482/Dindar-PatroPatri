import "./Style.css";
import titleImg from "./Logo.png";
export default function SearchData(props) {
  const {
    idNum,
    নাম,
    বয়স,
    বৈবাহিক_অবস্থা,
    বিভাগ,
    পেশা,
    শিক্ষাগতযোগ্যতা,
    আপনিকি_নিওমিত_নামাজপড়েন,
    আপনিকি_কুরআান_পড়তে_যানেন,
    আপনারকিশারিরিকঅঙ্গহানিবাবড়োকোনোরোগআছে,
    আপনারকিসুন্নতিদারিআছে,
    আপনিকিপর্দাকরেন,
    দ্বিনদারপাত্রপাত্রীসন্ধানপেজেআপনিকিধরনেরজীবনসঙ্গীচান,
  } = props.ab;
  return (
    <div style={{}}>
      <div className="SearchBiodata">
        <div className="div_1">
          <div className="biodataCard">
            <div
              style={{
                width: "100%",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              <img src={titleImg} alt="" />
            </div>
            <div className="cardBodyLine cardBodyLineId">
              <p className="p1">
                ফরম আইডিঃ- <span> {idNum}</span>
              </p>
            </div>
            {/*  */}
            <div className="cardBodyLine">
              <p className="p1">নামঃ-</p>
              <p className="p2"> {নাম}</p>
            </div>
            {/*  */}
            <div className="cardBodyLine">
              <p className="p1">বৈবাহিক অবস্থাঃ-</p>
              <p className="p2"> {বৈবাহিক_অবস্থা} </p>
            </div>
            {/*  */}
            <div className="cardBodyLine">
              <p className="p1">বিভাগঃ-</p>
              <p className="p2"> {বিভাগ} </p>
            </div>
            {/*  */}
            <div className="cardBodyLine">
              <p className="p1">বয়সঃ-</p>
              <p className="p2"> {বয়স} বছর </p>
            </div>
            {/*  */}
            <div className="cardBodyLine">
              <p className="p1">শিক্ষাগতযোগ্যতা-</p>
              <p className="p2"> {শিক্ষাগতযোগ্যতা} </p>
            </div>
            {/*  */}
            <div className="cardBodyLine">
              <p className="p1">পেশাঃ-</p>
              <p className="p2"> {পেশা} </p>
            </div>
            {/*  */}
            <div className="cardBodyLine">
              <p className="p1">নামাজঃ-</p>
              <p className="p2"> {আপনিকি_নিওমিত_নামাজপড়েন} </p>
            </div>
            {/*  */}
            <div className="cardBodyLine">
              <p className="p1">কুরআন শরীফঃ-</p>
              <p className="p2"> {আপনিকি_কুরআান_পড়তে_যানেন} </p>
            </div>
            {/*  */}
            <div className="cardBodyLine">
              <p className="p1">শারিরিক অঙ্গহানীঃ-</p>
              <p className="p2">{আপনারকিশারিরিকঅঙ্গহানিবাবড়োকোনোরোগআছে} </p>
            </div>
            {/*  */}
            <div className="cardBodyLine">
              <p className="p1">(পুরুষ) সুন্নতি দাড়িঃ-</p>
              <p className="p2">{আপনারকিসুন্নতিদারিআছে} </p>
            </div>
            {/*  */}
            <div className="cardBodyLine">
              <p className="p1">(মহিলা) খাছ পর্দাঃ-</p>
              <p className="p2">{আপনিকিপর্দাকরেন} </p>
            </div>
            {/*  */}
            <div className="cardBodyLine">
              <p className="p1">যেমন জীবনসঙ্গী চাচ্ছেঃ-</p>
              <p className="p2">
                {দ্বিনদারপাত্রপাত্রীসন্ধানপেজেআপনিকিধরনেরজীবনসঙ্গীচান}{" "}
              </p>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
}
