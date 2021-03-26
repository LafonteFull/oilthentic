import axios from '../../api/axios'

export const getTotalCount = () => {
  return async (dispatch, getState) => {
    try {
      const totalSum = await axios({
        method: 'get',
        url: '/share-count',
      })
      let result = totalSum.data.reduce((total, currentValue) => {
        return total + currentValue.shareCount;
      }, 0);

      dispatch({
        type: 'GET_CURRENT_SUM',
        payload: result
      })
    } catch (err) {
      console.log(err)
    }
  }
} 