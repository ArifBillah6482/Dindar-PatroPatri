import DesktopNavber from "./DesktopNav";
import MobileNavber from "./MobileNav";
export default function Navber() {
  return (
    <div
      className="Navber"
      style={{ marginBottom: "10px", boxShadow: "0 0 9px rgb(80, 80, 80)" }}
    >
      <MobileNavber />
      <DesktopNavber />
    </div>
  );
}
