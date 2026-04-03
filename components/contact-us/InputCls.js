export function inputCls(hasError) {
  return [
    "w-full rounded-lg px-3 py-2.5 text-sm text-dark2 bg-light2",
    "border outline-none transition-colors duration-150",
    "placeholder:text-dark2/30",
    hasError
      ? "border-red-400 focus:border-red-500"
      : "border-light2 focus:border-light1",
  ].join(" ");
}