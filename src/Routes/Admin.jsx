import Admin from "../components/Admin";

function AdminRoute() {
     const pass = prompt("");
    if (pass === "s") {
  return (
    <div>
      <Admin />
    </div>
  );
    } else if (pass !== "s") {
   return <>এখানে কোনো তথ্য নেই।</>;
 } else {
    return <>এখানে কোনো তথ্য নেই।</>;
    }
}
export default AdminRoute;
