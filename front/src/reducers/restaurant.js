export const initialState = {
  restaurant: [],
  imagePaths: [],
};

export const UPLOAD_RESTARAURANT_INFO_REQUEST =
  "UPLOAD_RESTARAURANT_INFO_REQUEST";
export const UPLOAD_RESTARAURANT_INFO_SUCCESS =
  "UPLOAD_RESTARAURANT_INFO_SUCCESS";
export const UPLOAD_RESTARAURANT_INFO_FAILURE =
  "UPLOAD_RESTARAURANT_INFO_FAILURE";

export const GET_RESTARAURANT_INFO_REQUEST = "GET_RESTARAURANT_INFO_REQUEST";
export const GET_RESTARAURANT_INFO_SUCCESS = "GET_RESTARAURANT_INFO_SUCCESS";
export const GET_RESTARAURANT_INFO_FAILURE = "GET_RESTARAURANT_INFO_FAILURE";

export const GET_DETAIL_INFO_SUCCESS = "GET_DETAIL_INFO_SUCCESS";
export const GET_DETAIL_INFO_FAILURE = "GET_DETAIL_INFO_FAILURE";
export const GET_DETAIL_INFO_REQUEST = "GET_DETAIL_INFO_REQUEST";

export const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
export const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
export const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";

export const SEARCH_TARGETS_REQUEST = "SEARCH_TARGETS_REQUEST";
export const SEARCH_TARGETS_SUCCESS = "SEARCH_TARGETS_SUCCESS";
export const SEARCH_TARGETS_FAILURE = "SEARCH_TARGETS_FAILURE";

export const REMOVE_IMAGE_FRONT = "REMOVE_IMAGE_FRONT";

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTARAURANT_INFO_REQUEST:
    case GET_RESTARAURANT_INFO_FAILURE:
    case GET_DETAIL_INFO_REQUEST:
    case SEARCH_TARGETS_REQUEST:
    case SEARCH_TARGETS_FAILURE:
    case GET_DETAIL_INFO_FAILURE: {
      return {
        ...state,
        restaurant: [],
      };
    }
    case GET_RESTARAURANT_INFO_SUCCESS:
    case SEARCH_TARGETS_SUCCESS:
    case GET_DETAIL_INFO_SUCCESS: {
      return {
        ...state,
        restaurant: action.data,
      };
    }

    case UPLOAD_RESTARAURANT_INFO_REQUEST:

    case UPLOAD_RESTARAURANT_INFO_FAILURE: {
      return {
        ...state,
      };
    }
    case UPLOAD_RESTARAURANT_INFO_SUCCESS: {
      return {
        ...state,

        imagePaths: [],
      };
    }
    case UPLOAD_IMAGES_REQUEST: {
      return {
        ...state,
      };
    }
    case UPLOAD_IMAGES_SUCCESS: {
      return {
        ...state,
        imagePaths: state.imagePaths.concat(action.data),
      };
    }
    case UPLOAD_IMAGES_FAILURE: {
      return {
        ...state,
      };
    }
    case REMOVE_IMAGE_FRONT: {
      return {
        ...state,
        imagePaths: state.imagePaths.filter((v, i) => i !== action.data),
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
