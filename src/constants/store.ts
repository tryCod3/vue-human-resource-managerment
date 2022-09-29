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
    TOGGLE_SIDEBAR: {
      GET: 'GET_TOGGLE_SIDEBAR',
      SET: 'SET_TOGGLE_SIDEBAR',
      GET_WITH_NAMESPACED: 'app/GET_TOGGLE_SIDEBAR',
      SET_WITH_NAMESPACED: 'app/SET_TOGGLE_SIDEBAR',
    },
    DEVICE: {
      GET: 'GET_DEVICE',
      SET: 'SET_DEVICE',
      GET_WITH_NAMESPACED: 'app/GET_DEVICE',
      SET_WITH_NAMESPACED: 'app/SET_DEVICE',
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
  API: {
    CONFIG: {
      MODULE: 'api',
    },
    FECTH: {
      STATE: {
        GET: 'GET_STATE',
        SET: 'SET_STATE',
        GET_WITH_NAMESPACED: 'api/GET_STATE',
        SET_WITH_NAMESPACED: 'api/SET_STATE',
      },
      HAS_FETCH: {
        GET: 'GET_HAS_FETCH',
        SET: 'SET_HAS_FETCH',
        GET_WITH_NAMESPACED: 'api/GET_HAS_FETCH',
        SET_WITH_NAMESPACED: 'api/SET_HAS_FETCH',
      },
      START: {
        GET: 'GET_START',
        SET: 'SET_START',
        GET_WITH_NAMESPACED: 'api/GET_START',
        SET_WITH_NAMESPACED: 'api/SET_START',
      },
      DONE: {
        GET: 'GET_DONE',
        SET: 'SET_DONE',
        GET_WITH_NAMESPACED: 'api/GET_DONE',
        SET_WITH_NAMESPACED: 'api/SET_DONE',
      },
    },
  },
};

export default STORE;
