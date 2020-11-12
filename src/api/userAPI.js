export const fetchById = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: "david"
        });
    }, 1500);
  });
};
