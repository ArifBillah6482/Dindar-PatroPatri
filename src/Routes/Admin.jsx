import Admin from "../components/Admin";

function AdminRoute() {
  const pass = prompt("");
  if (pass === "0") {
    return <Admin />;
  } else if (pass !== "0") {
    return <>এখানে কোনো তথ্য নেই।</>;
  } else {
    return <>এখানে কোনো তথ্য নেই।</>;
  }
}
export default AdminRoute;
