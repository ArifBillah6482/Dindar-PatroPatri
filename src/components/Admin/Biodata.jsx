import "./Style.css";
export default function Biodata(props) {
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
    <div>
      <div
        className="admin_biodata_card"
        style={{
          border: "1px solid blue",
        }}
      >
        <p className="id">ফরম আইডিঃ {id}</p>
        <p>Time: {Time}</p>
        <p style={{ color: "purple", fontSize: "18px" }}>নামঃ {নাম}</p>
        <p>পাত্র_পাত্রীঃ {পাত্র_পাত্রী}</p>
        <p>বয়সঃ {বয়স}</p>
        <p>উচ্চতা ঃ {উচ্চতা}</p>
        <p>ওজন ঃ {ওজন}</p>
        <p>গায়ের_রং ঃ {গায়ের_রং}</p>
        <p>বৈবাহিক_অবস্থা ঃ {বৈবাহিক_অবস্থা}</p>
        <p>বিভাগ ঃ {বিভাগ}</p>
        <p>বর্তমানঠিকানা ঃ {বর্তমানঠিকানা}</p>
        <p>স্হায়ী_ঠিকানা ঃ{স্হায়ী_ঠিকানা}</p>
        <p>পেশা ঃ{পেশা}</p>
        <p>মাসিকইনকাম ঃ{মাসিকইনকাম}</p>
        <p>শিক্ষাগতযোগ্যতা ঃ{শিক্ষাগতযোগ্যতা}</p>
        <p>বাবারপেশা ঃ {বাবারপেশা}</p>
        <p>মায়েরপেশা ঃ{মায়েরপেশা}</p>
        <p>আপনিকি_নিওমিত_নামাজপড়েন ঃ{আপনিকি_নিওমিত_নামাজপড়েন}</p>
        <p>আপনিকি_কুরআান_পড়তে_যানেন ঃ{আপনিকি_কুরআান_পড়তে_যানেন}</p>
        <p>
          আপনিকি_সন্তানআছে_এমন_কাউকে_বিবাহকরতেচান ঃ
          {আপনিকি_সন্তানআছে_এমন_কাউকে_বিবাহকরতেচান}
        </p>
        <p>
          আপনারকিশারিরিকঅঙ্গহানিবাবড়োকোনোরোগআছে ঃ{" "}
          {আপনারকিশারিরিকঅঙ্গহানিবাবড়োকোনোরোগআছে}
        </p>
        <p>আপনারকিসুন্নতিদারিআছে ঃ{আপনারকিসুন্নতিদারিআছে}</p>
        <p>আপনিকিপর্দাকরেন ঃ {আপনিকিপর্দাকরেন}</p>
        <p>
          দ্বিনদারপাত্রপাত্রীসন্ধানপেজেআপনিকিধরনেরজীবনসঙ্গীচান ঃ{" "}
          {দ্বিনদারপাত্রপাত্রীসন্ধানপেজেআপনিকিধরনেরজীবনসঙ্গীচান}
        </p>
        <p>পাএপাএীবয়স ঃ{পাএপাএীবয়স}</p>
        <p>পাত্রপাত্রীউচ্চতা ঃ{পাত্রপাত্রীউচ্চতা}</p>
        <p>পাত্রপাত্রীগায়েররং ঃ{পাত্রপাত্রীগায়েররং}</p>
        <p>পাএপাএীলেখাপড়া ঃ{পাএপাএীলেখাপড়া}</p>
        <p>এস্ট্রাকিছু ঃ{এস্ট্রাকিছু}</p>
        <p>মোবাইল ঃ{মোবাইল}</p>
        <p>এফবিআইডিলিংক ঃ{এফবিআইডিলিংক}</p>
        <p>আমাদেরসেবা ঃ{আমাদেরসেবা}</p>
        {/*  */}
        <br />
        {/*  */}
        <button
          className="BtnPurple approveBtn"
          style={{ width: "max-content" }}
          onClick={() => {
            const idNum = prompt("Enter ID: ");
            function a(callback) {
//               `https://dindar-patro-patri-default-rtdb.firebaseio.com/AllBiodata.json/`,
              fetch(
                process.env.REACT_APP_ALL_B
                {
                  method: "POST", // or 'PUT'
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    id,
                    idNum: idNum,
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
                  }),
                }
              )
                .then(() => {})
                .then(() => {
                  console.log("Success");
                })
                .catch((error) => {
                  console.error("Error:", error);
                });
              /////////////////////////
              fetch(
                `https://sifatullah-web-default-rtdb.firebaseio.com/AllBiodata.json/`,
                {
                  method: "POST", // or 'PUT'
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    id,
                    idNum: idNum,
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
                  }),
                }
              )
                .then(() => {})
                .then(() => {
                  console.log("Success");
                })
                .catch((error) => {
                  console.error("Error:", error);
                });
              //////////////////
              fetch(
                "https://dindar-patro-patri-default-rtdb.firebaseio.com/PendingBiodata.json"
              )
                .then((res) => res.json())
                .then((respone) => {
                  function a(callback) {
                    const datas = [];
                    for (let key in respone) {
                      datas.unshift({ ...respone[key] });
                      // eslint-disable-next-line
                      datas.map((data) => {
                        if (data.id === id) {
                          let fileName1 = data.নাম.split(/\W/g);
                          let fileName2 = data.মোবাইল.split(/\D/g);
                          let fileName = fileName1 + "" + fileName2;
                          fetch(
                            `https://dindar-patro-patri-default-rtdb.firebaseio.com/PendingBiodata/${fileName}.json`,
                            {
                              method: "DELETE",
                            }
                          )
                            .then(() => console.log("Success."))
                            .catch(() => alert("Error"));
                        } else {
                        }
                      });
                    }
                    //
                    callback();
                  }
                  function b() {
                    console.log("Sucess");
                  }
                  a(() => b());
                  // /////////
                });
              /////////////////////////
              callback();
            }
            function b() {
              alert("Success.");
            }
            /////////////////////////
            a(() => b());
          }}
        >
          Approve
        </button>

        <button
          className="BtnRed"
          onClick={() => {
            const confrm = window.confirm(
              "Are you sure to delete this biodata?"
            );
            if (confrm) {
              fetch(
                "https://dindar-patro-patri-default-rtdb.firebaseio.com/PendingBiodata.json"
              )
                .then((res) => res.json())
                .then((respone) => {
                  function a(callback) {
                    const datas = [];
                    for (let key in respone) {
                      datas.unshift({ ...respone[key] });
                      // eslint-disable-next-line
                      datas.map((data) => {
                        if (data.id === id) {
                          let fileName1 = data.নাম.split(/\W/g);
                          let fileName2 = data.মোবাইল.split(/\D/g);
                          let fileName = fileName1 + "" + fileName2;
                          fetch(
                            `https://dindar-patro-patri-default-rtdb.firebaseio.com/PendingBiodata/${fileName}.json`,
                            {
                              method: "DELETE",
                            }
                          )
                            .then(() => console.log("Success."))
                            .catch(() => alert("Error"));
                        } else {
                        }
                      });
                    }
                    //
                    callback();
                  }
                  function b() {
                    console.log("Sucess");
                  }
                  a(() => b());
                  // /////////
                });
            } else {
              console.log();
            }
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
