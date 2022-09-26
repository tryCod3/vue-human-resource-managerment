const WIDTH_LAPTOP = 1024;
const WIDTH_MOBIE = 768;

export const isLaptop = () => {
  return document.documentElement.clientWidth >= WIDTH_LAPTOP;
};

export const isMobie = () => {
  return document.documentElement.clientWidth <= WIDTH_MOBIE - 1;
};
