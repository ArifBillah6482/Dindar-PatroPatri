import titleImg from "./Logo.png";
export default function Biodatas(props) {
  const {
    id,
    Time,
    পাত্র_পাত্রী,
    নাম,
    বয়স,
    উচ্চতা,
    ওজন,
    গায়ের_রং,
    বৈবাহিক_অবস্থা,
    বিভাগ,
    বর্তমানঠিকানা,
    স্হায়ী_ঠিকানা,
    পেশা,
    মাসিকইনকাম,
    শিক্ষাগতযোগ্যতা,
    বাবারপেশা,
    মায়েরপেশা,
    আপনিকি_নিওমিত_নামাজপড়েন,
    আপনিকি_কুরআান_পড়তে_যানেন,
    আপনিকি_সন্তানআছে_এমন_কাউকে_বিবাহকরতেচান,
    আপনারকিশারিরিকঅঙ্গহানিবাবড়োকোনোরোগআছে,
    আপনারকিসুন্নতিদারিআছে,
    আপনিকিপর্দাকরেন,
    দ্বিনদারপাত্রপাত্রীসন্ধানপেজেআপনিকিধরনেরজীবনসঙ্গীচান,
    পাএপাএীবয়স,
    পাত্রপাত্রীউচ্চতা,
    পাত্রপাত্রীগায়েররং,
    পাএপাএীলেখাপড়া,
    এস্ট্রাকিছু,
    মোবাইল,
    এফবিআইডিলিংক,
    আমাদেরসেবা,
  } = props.data;
  return (
    <div style={{}}>
      <div className="allBiodata">
        <div className="div1">
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
                ফরম আইডিঃ- <span> {id}</span>
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
              <p className="p2">{আপনারকিশারিরিকঅঙ্গহানিবাবড়োকোনোরোগআছে}ই </p>
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
