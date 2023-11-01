export function TimeConsumerDelay({ func, time }) {
  return new Promise((res, rej) => {
    setTimeout(() => {     
      if (func) {     
        res("success");
      } else {
        rej("error");
      }
    }, time);
  });
}