const filterPhone = (str: string) => {
  return str
    .split("")
    .reduce((acc: string[], str) => {
      if (!isNaN(+str)) {
        acc.push(str);
      }

      return acc;
    }, [])
    .join("")
    .replace(/\s/g, "");
};

export { filterPhone };
