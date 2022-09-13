const STORE = {
  APP: {
    CONFIG: {
      MODULE: 'app',
    },
    NAVBAR_DYNAMIC: {
      GET: 'GET_NAVBAR_DYNAMIC',
      SET: 'SET_NAVBAR_DYNAMIC',
      GET_WITH_NAMESPACED: 'app/GET_NAVBAR_DYNAMIC',
      SET_WITH_NAMESPACED: 'app/SET_NAVBAR_DYNAMIC',
    },
    RESET: {
      GET: 'GET_RESET',
      SET: 'SET_RESET',
      GET_WITH_NAMESPACED: 'app/GET_RESET',
      SET_WITH_NAMESPACED: 'app/SET_RESET',
    },
  },
  USER: {
    CONFIG: {
      MODULE: 'user',
    },
    LOGIN: {
      GET: 'GET_LOGIN',
      SET: 'SET_LOGIN',
      GET_WITH_NAMESPACED: 'user/GET_LOGIN',
      SET_WITH_NAMESPACED: 'user/SET_LOGIN',
    },
    LOGOUT: {
      GET: 'GET_LOGOUT',
      SET: 'SET_LOGOUT',
      GET_WITH_NAMESPACED: 'user/GET_LOGOUT',
      SET_WITH_NAMESPACED: 'user/SET_LOGOUT',
    },
    PROFILE: {
      GET: 'GET_PROFILE',
      SET: 'SET_PROPFILE',
      GET_WITH_NAMESPACED: 'user/GET_PROFILE',
      SET_WITH_NAMESPACED: 'user/SET_PROPFILE',
    },
  },
};

export default STORE;
