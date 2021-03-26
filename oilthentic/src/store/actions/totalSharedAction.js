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

export const incrementSum = (socialMedia, shareCount) => {
  console.log(socialMedia, shareCount, '<<< incrementsum action')
  return async (dispatch, getState) => {
    try {
      const { data } = await axios({
        method: 'post',
        url: '/share-count',
        data: {
          socialMedia,
          shareCount
        }
      })
      console.log(data, '<< totalSharedAction')
      dispatch(getTotalCount())
    } catch (err) {
      console.log(err)
    }
  }
} 