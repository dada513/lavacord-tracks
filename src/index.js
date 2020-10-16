import axios from "axios";

/**
 * See {@link https://lavacord.github.io/Lavacord/classes/lavalinknode.html}
 * @typedef {Object} LavalinkNode
 */

/**
 * @typedef {Object} TrackInfo - Info about a track
 * @property {string} identifier
 * @property {boolean} isSeekable
 * @property {string} author
 * @property {number} length
 * @property {boolean} isStream
 * @property {number} position
 * @property {string} title
 * @property {string} uri
 */

/**
 * @typedef {Object} Track - A lavalink track
 * @property {string} track - The track base64 string
 * @property {TrackInfo} info
 */

/**
 * Check out {@link https://github.com/lavacord/Lavacord#implementation}
 * See also {@link https://lavacord.github.io/Lavacord/classes/lavalinknode.html}
 * and {@link https://lavacord.github.io/Lavacord/classes/manager.html#idealnodes}
 * @method
 * @param {string} query - The search query
 * @param {LavalinkNode} node - The LavaLink node [see Manager.idealNodes]
 * @returns {Track[]} - The tracks
 */
export const getSongs = async (query, node) => {
  const res = await axios.get(`http://${node.host}:${node.port}/loadtracks`, {
    headers: {
      Authorization: node.password,
    },
    params: {
      identifier: query,
    },
  });
  return res.data.tracks;
};
