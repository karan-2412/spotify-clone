export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //   REMOVE AFTER DEVELOPING
  // token:
  //   "BQDmH8qJGvGuGPxAbwxDpKC9tYArBYMDNN48rZRoOJ7GgZ4rWUSsp7iPz27KLjXE0HRaLYJGVG10WEr8oVOw2RrxYTbBecO-ASL4ruMuuphopH85kAfDlNkq5z_Xf6iDy4s2LKhJnbNgqIqEnML6UmAvQRa1LE-Y-fB4Zu3RdyfJK5Cf",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
