export const getClasses = (...classes: (string | undefined)[]) => {
  return classes.filter(c => c !== undefined).join(" ");
};
