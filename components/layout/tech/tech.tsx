import Header_tech from "./header";
import Card_tech from "./card";

export default function Tech() {
  return (
    <>
      <div className="flex flex-col gap-10 p-4">
        <Header_tech />
        <Card_tech />
      </div>
    </>
  );
}
