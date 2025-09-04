export const sleep = (delay: number = 3000) => {
  return new Promise(resolve => setTimeout(() => resolve(null), delay));
};
