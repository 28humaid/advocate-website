"use client";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
import Field from "./Field";
import SuccessMessage from "./SuccessMessage";
import { inputCls } from "./InputCls";

const SUBJECTS = [
  "General enquiry",
  "Partnership",
  "Support",
  "Feedback",
  "Other",
];

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("📬 Contact Form Submitted:", data);
  };

  if (isSubmitSuccessful) {
    return <SuccessMessage onReset={reset} />;
  }

  return (
    <>
      <h3 className="text-base font-semibold text-dark2 mb-1">
        Send us a message
      </h3>
      {/* <p className="text-sm text-dark2/70 mb-6">
        We typically reply within one business day.
      </p> */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 flex-1"
        noValidate
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="First name" error={errors.firstName?.message}>
            <input
              type="text"
              placeholder="Arjun"
              {...register("firstName", { required: "First name is required" })}
              className={inputCls(!!errors.firstName)}
            />
          </Field>
          <Field label="Last name" error={errors.lastName?.message}>
            <input
              type="text"
              placeholder="Sharma"
              {...register("lastName", { required: "Last name is required" })}
              className={inputCls(!!errors.lastName)}
            />
          </Field>
        </div>

        <Field label="Email address" error={errors.email?.message}>
          <input
            type="email"
            placeholder="arjun@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            className={inputCls(!!errors.email)}
          />
        </Field>

        <Field label="Subject" error={errors.subject?.message}>
          <select
            defaultValue=""
            {...register("subject", { required: "Please select a topic" })}
            className={
              inputCls(!!errors.subject) +
              " appearance-none bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23888'/%3E%3C/svg%3E\")] bg-no-repeat bg-[right_12px_center] pr-8"
            }
          >
            <option value="" disabled>Select a topic</option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>

        <Field label="Message" error={errors.message?.message}>
          <textarea
            rows={4}
            placeholder="Tell us how we can help you..."
            {...register("message", {
              required: "Message is required",
              minLength: { value: 10, message: "Message must be at least 10 characters" },
            })}
            className={inputCls(!!errors.message) + " resize-none"}
          />
        </Field>

        <div className="flex flex-wrap gap-4 mt-auto pt-2">
          <p className="flex-1 text-xs text-dark2 leading-relaxed">
            Your details are safe with us. We never share your information.
          </p>
          <button
            type="submit"
            className="flex items-center gap-2 bg-dark1 text-light1 border border-light1/30 rounded-lg px-5 py-2.5 text-sm tracking-wide hover:bg-light1 hover:text-dark1 transition-colors duration-200 cursor-pointer flex-1 max-w-[200px]"
          >
            Send message
            <Send size={14} />
          </button>
        </div>
      </form>
    </>
  );
}