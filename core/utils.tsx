export const firstLatterUppercase = (str: string, separator = " ") => {
  return str
    .split(separator)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(separator);
};

export const taskDate = (date: string) => {
  const dateFormated = new Date(date)
    .toLocaleDateString("id-ID", {
      month: "short",
      day: "numeric",
    })
    .split(" ");

  return `${dateFormated[1]}, ${dateFormated[0].padStart(2, "0")}`;
};
