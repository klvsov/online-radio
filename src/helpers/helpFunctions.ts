export const isValidUrl = (str: string) => {
  const pattern = new RegExp(
    /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&=]*)?/gi
  );
  return pattern.test(str);
};
