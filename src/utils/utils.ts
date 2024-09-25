export const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark');
};

export const cn = (...classes: (string | undefined | null | boolean)[]) => (
  classes.filter(Boolean).join(' ')
);
