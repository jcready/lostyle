import corners from './util/corners.js';

/**
 * Directional borderRadius helper
 * @function borderRadius
 * @param  {number|string|object} value              Value for all directions or object of values:
 * @param  {number|string}       [value.nw]          North West value ╭
 * @param  {number|string}       [value.ne]          North East value ╮
 * @param  {number|string}       [value.se]          South East value ╯
 * @param  {number|string}       [value.sw]          South West value ╰
 * @param  {number|string}       [value.topLeft]     Top Left value (takes precedence over nw)
 * @param  {number|string}       [value.topRight]    Top Right value (takes precedence over ne)
 * @param  {number|string}       [value.bottomRight] Bottom Right value (takes precedence over se)
 * @param  {number|string}       [value.bottomLeft]  Bottom Left value (takes precedence over sw)
 * @return {object}                             Style object
 * @example
 * // All directions
 * borderRadius('foo');
 * // → {
 * //     borderTopLeftRadius: 'foo',
 * //     borderTopRightRadius: 'foo',
 * //     borderBottomRightRadius: 'foo',
 * //     borderBottomLeftRadius: 'foo'
 * //   }
 * @example
 * // Using compass directions
 * borderRadius({nw: 'bar', se: 'baz'});
 * // → {
 * //     borderTopLeftRadius: 'bar',
 * //     borderBottomRightRadius: 'bar'
 * //   }
 * @example
 * // Using box directions
 * borderRadius({topRight: 'bar', bottomLeft: 'baz'});
 * // → {
 * //     borderTopRightRadius: 'bar',
 * //     borderBottomLeftRadius: 'baz'
 * //   }
 */
export default directional(
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomRightRadius',
  'borderBottomLeftRadius'
);
