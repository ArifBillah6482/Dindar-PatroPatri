import Admin from "../components/Admin";

function AdminRoute() {
     const pass = prompt("");
    if (pass === "606920") {
  return (
    <div>
      <Admin />
    </div>
  );
    } else if (pass !== "606920") {
   return <>এখানে কোনো তথ্য নেই।</>;
 } else {
    return <>এখানে কোনো তথ্য নেই।</>;
    }
}
export default AdminRoute;
