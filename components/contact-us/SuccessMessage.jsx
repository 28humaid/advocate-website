import { Send } from "lucide-react";

export default function SuccessMessage({ onReset }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
      <span className="w-12 h-12 rounded-full border border-light1 flex items-center justify-center text-light1">
        <Send size={18} />
      </span>
      <h4 className="text-lg font-medium text-dark2">Message sent!</h4>
      <p className="text-sm text-dark2/60">
        Thank you for reaching out. We'll get back to you within one business day.
      </p>
      <button
        onClick={onReset}
        className="mt-2 text-xs text-light1 underline underline-offset-2 cursor-pointer"
      >
        Send another message
      </button>
    </div>
  );
}