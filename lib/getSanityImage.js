export const getSanityImage = (imageSrc) => {
  let trueImgSrc = imageSrc.replace(/(image-)/, '');

  trueImgSrc = trueImgSrc.replace(/(-jpg)/, '.jpg');

  return `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${trueImgSrc}?auto=format&fit=max&w=720`;
};
