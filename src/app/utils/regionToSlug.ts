export const regionToSlug = (region: string) => {
  return region.toLowerCase().replace(/ /g, '-');
};
