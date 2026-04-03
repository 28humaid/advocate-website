import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactUs() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-[1fr_1.5fr] min-h-[520px] rounded-xl overflow-hidden">
        <ContactInfo />
        <div className="bg-light3 px-8 py-10 flex flex-col">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}