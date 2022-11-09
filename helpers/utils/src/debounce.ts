
function debounce(func: Function) {
  let timer: any = null;
  return function (...args: any) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(null, args);
    }, 800);
  };
}

export default debounce;
