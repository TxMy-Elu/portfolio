import Header_cont from "./header";
import DocumentsPro from "./documents-pro";

export default function Documents() {
  return (
    <div className="">
      <Header_cont />
      <div className="max-w-4xl mx-auto p-6">
        <div className="grid gap-6">
          <DocumentsPro />
        </div>
      </div>
    </div>
  );
}
