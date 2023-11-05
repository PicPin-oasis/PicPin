import Introduce from "@/components/introduce/Introduce";
import MarkMap from "@/components/markMap/MarkMap";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex gap-3">
        <Introduce />
        <MarkMap />
      </div>
    </>
  );
}
