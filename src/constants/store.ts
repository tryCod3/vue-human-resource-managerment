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
    PROFILE: {
      GET: 'GET_PROFILE',
      SET: 'SET_PROPFILE',
      GET_WITH_NAMESPACED: 'user/GET_PROFILE',
      SET_WITH_NAMESPACED: 'user/SET_PROPFILE',
    },
  },
};

export default STORE;
