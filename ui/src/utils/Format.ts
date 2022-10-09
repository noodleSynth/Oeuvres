export const formatDate = (dtString: string) : string =>
  new Date(dtString).toLocaleDateString();
