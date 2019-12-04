export default function corners(nw, ne, se, sw) {
  return function(arg) {
    var target = {};
    if (typeof arg === 'object' && arg !== null) {
      if (arg.nw || arg.nw === 0) { target[nw] = arg.nw; }
      if (arg.ne || arg.ne === 0) { target[ne] = arg.ne; }
      if (arg.se || arg.se === 0) { target[se] = arg.se; }
      if (arg.sw || arg.sw === 0) { target[sw] = arg.sw; }
      return target;
    }
    target[nw] = arg;
    target[ne] = arg;
    target[se] = arg;
    target[sw] = arg;
    return target;
  }
}
