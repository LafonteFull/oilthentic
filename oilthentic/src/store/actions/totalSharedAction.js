import axios from '../../api/axios'

export const getTotalCount = () => {
  return async (dispatch, getState) => {
    try {
      const totalSum = await axios.get({
        method: 'get',
        url: '/share-count',
      })
      console.log(totalSum , 'ttoal share action')
      dispatch({
        type: 'GET_CURRENT_SUM',
        payload: totalSum
      })
    } catch (err) {
      console.log(err)
    }
  }
} 