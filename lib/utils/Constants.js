"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerOptions = exports.PlayerErrorEventCodes = exports.PlayerEvents = void 0;
var PlayerEvents;
(function (PlayerEvents) {
    PlayerEvents["BOT_DISCONNECT"] = "botDisconnect";
    PlayerEvents["CHANNEL_EMPTY"] = "channelEmpty";
    PlayerEvents["CONNECTION_CREATE"] = "connectionCreate";
    PlayerEvents["ERROR"] = "error";
    PlayerEvents["MUSIC_STOP"] = "musicStop";
    PlayerEvents["NO_RESULTS"] = "noResults";
    PlayerEvents["PLAYLIST_ADD"] = "playlistAdd";
    PlayerEvents["PLAYLIST_PARSE_END"] = "playlistParseEnd";
    PlayerEvents["PLAYLIST_PARSE_START"] = "playlistParseStart";
    PlayerEvents["QUEUE_CREATE"] = "queueCreate";
    PlayerEvents["QUEUE_END"] = "queueEnd";
    PlayerEvents["SEARCH_CANCEL"] = "searchCancel";
    PlayerEvents["SEARCH_INVALID_RESPONSE"] = "searchInvalidResponse";
    PlayerEvents["SEARCH_RESULTS"] = "searchResults";
    PlayerEvents["TRACK_ADD"] = "trackAdd";
    PlayerEvents["TRACK_START"] = "trackStart";
})(PlayerEvents = exports.PlayerEvents || (exports.PlayerEvents = {}));
var PlayerErrorEventCodes;
(function (PlayerErrorEventCodes) {
    PlayerErrorEventCodes["LIVE_VIDEO"] = "LiveVideo";
    PlayerErrorEventCodes["NOT_CONNECTED"] = "NotConnected";
    PlayerErrorEventCodes["UNABLE_TO_JOIN"] = "UnableToJoin";
    PlayerErrorEventCodes["NOT_PLAYING"] = "NotPlaying";
    PlayerErrorEventCodes["PARSE_ERROR"] = "ParseError";
    PlayerErrorEventCodes["VIDEO_UNAVAILABLE"] = "VideoUnavailable";
    PlayerErrorEventCodes["MUSIC_STARTING"] = "MusicStarting";
})(PlayerErrorEventCodes = exports.PlayerErrorEventCodes || (exports.PlayerErrorEventCodes = {}));
exports.PlayerOptions = {
    leaveOnEnd: true,
    leaveOnStop: true,
    leaveOnEmpty: true,
    leaveOnEmptyCooldown: 0,
    autoSelfDeaf: true,
    enableLive: false,
    ytdlDownloadOptions: {}
};
