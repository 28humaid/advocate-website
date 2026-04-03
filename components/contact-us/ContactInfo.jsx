import { Phone, Mail, MapPin } from "lucide-react";

const INFO_ITEMS = [
  { icon: <Phone size={15} strokeWidth={1.5} />, label: "Phone", value: "+91 9811 48 3438" },
  { icon: <Mail size={15} strokeWidth={1.5} />, label: "Email", value: "alamgir.alamgir1@gmail.com" },
  { icon: <MapPin size={15} strokeWidth={1.5} />, label: "Location", value: "Chamber No. 566, Patiala House Court, New Delhi-110001, India" },
];

const HOURS = [
  { day: "Mon – Sat", time: "03:00 pm – 07:00 pm" },
//   { day: "Saturday", time: "10:00 am – 2:00 pm" },
  { day: "Sunday", time: "On Appointment" },
];

export default function ContactInfo() {
  return (
    <div className="bg-dark1 px-8 py-10 flex flex-col justify-between">
      <div>
        <h2 className="font-heading text-3xl font-normal text-light2 leading-snug mb-2">
          Contact Us
        </h2>
        <p className="text-sm text-light2 mb-6 leading-relaxed">
          Get in touch for legal consultations, case inquiries, or professional assistance.
        </p>
        <div className="w-10 h-px bg-light1 mb-8" />

        <ul className="flex flex-col gap-5">
          {INFO_ITEMS.map(({ icon, label, value }) => (
            <li key={label} className="flex items-start gap-3">
              <span className="w-9 h-9 border border-light1/20 rounded-lg flex items-center justify-center text-light1 shrink-0">
                {icon}
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-light2 mb-0.5">
                  {label}
                </p>
                <p className="text-sm text-light1">{value}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6 mt-6 border-t border-white/10">
        <p className="text-[10px] uppercase tracking-widest text-light1 mb-3">
          Consultation hours
        </p>
        {HOURS.map(({ day, time }) => (
          <div key={day} className="flex justify-between text-xs text-light2 py-1">
            <span>{day}</span>
            <span className="text-light1">{time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}