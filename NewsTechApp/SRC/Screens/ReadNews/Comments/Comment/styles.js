import { StyleSheet } from 'react-native'
import Color from '../../../Color'

const styles = StyleSheet.create({
  comment: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: Color.lightGray,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userImage: {
    padding: 20,
    borderRadius: 100,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  userRecord: {
    width: '90%',
    marginLeft: 10,
  },
  commentContent: {
    fontSize: 20,
    marginHorizontal: 20,
  },
  userCapacity: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
})

export default styles