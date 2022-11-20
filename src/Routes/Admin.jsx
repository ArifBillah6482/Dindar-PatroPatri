import Admin from "../components/Admin";

function AdminRoute() {
     const pass = prompt("Enter your eight digit password: ");
    if (pass === "s") {
  return (
    <div>
      <Admin />
    </div>
  );
    } else if (pass !== "s") {
   return <p style={{color: 'red', margin: '20px'}}>পাসওয়ার্ড ভুল!</p>;
 } else {
    return <p style={{color: 'red', margin: '20px'}}>পাসওয়ার্ড ভুল!</p>;
    }
}
export default AdminRoute;
