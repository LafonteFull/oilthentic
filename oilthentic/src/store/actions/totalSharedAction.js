import axios from '../../api/axios'

export const getTotalCount = () => {
  return async (dispatch, getState) => {
    try {
      const totalSum = await axios.get('/share-count')
      console.log(totalSum, 'ini dari action')
      dispatch({
        type: 'GET_CURRENT_SUM',
        payload: totalSum
      })
    } catch (err) {
      console.log(err)
    }
  }
} 