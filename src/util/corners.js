export default function corners(nw, ne, se, sw) {
  return function(arg) {
    var target = {};
    if (typeof arg === 'object' && arg !== null) {
      if (arg.nw || arg.nw === 0) { target[nw] = arg.nw; }
      if (arg.ne || arg.ne === 0) { target[ne] = arg.ne; }
      if (arg.se || arg.se === 0) { target[se] = arg.se; }
      if (arg.sw || arg.sw === 0) { target[sw] = arg.sw; }
      if (arg.topLeft || arg.topLeft === 0) { target[nw] = arg.topLeft; }
      if (arg.topRight || arg.topRight === 0) { target[ne] = arg.topRight; }
      if (arg.bottomRight || arg.bottomRight === 0) { target[se] = arg.bottomRight; }
      if (arg.bottomLeft || arg.bottomLeft === 0) { target[sw] = arg.bottomLeft; }
      return target;
    }
    target[nw] = arg;
    target[ne] = arg;
    target[se] = arg;
    target[sw] = arg;
    return target;
  }
}
