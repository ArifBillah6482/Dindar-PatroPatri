import Admin from "../components/Admin";

function AdminRoute() {
     const pass = prompt("Enter your eight digit password: ");
    if (pass === process.env.REACT_APP_TOKEN) {
  return (
    <div>
      <Admin />
    </div>
  );
    } else if (pass !== process.env.REACT_APP_TOKEN) {
   return <p style={{color: 'red', margin: '20px'}}>পাসওয়ার্ড ভুল!</p>;
 } else {
    return <p style={{color: 'red', margin: '20px'}}>পাসওয়ার্ড ভুল!</p>;
    }
}
export default AdminRoute;
