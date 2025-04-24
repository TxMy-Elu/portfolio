import Header_cont from "./header";
import ContactInfo from "./contact-info";

export default function Contact() {
  return (
    <div className="">
      <Header_cont />
      <div className="max-w-4xl mx-auto p-6">
        <div className="grid gap-6">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
