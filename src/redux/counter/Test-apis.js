export function TimeConsumerDelay({ func, time }) {
  return new Promise((res, rej) => {
    settimeout(() => {
      if (method) {
        res("success");
      } else {
        rej("error");
      }
    }, time);
  });
}
