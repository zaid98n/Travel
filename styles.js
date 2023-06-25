import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafae3',
  },
  scrollContentContainer: {
    flexGrow: 1,
    //paddingBottom: 200
    //backgroundColor: '#fafae3',
  },
  backImage: {
    // position: 'absolute',
    // width: '100%',
    height: 170,
    //top: 194,
    //marginTop: 15,
  },
  profileImage: {
    position: 'relative',
    width: 140,
    height: 140,
    left: 15,
    top: -80,
    borderColor: 'white',
    borderWidth: 4,
    borderRadius: 140,
  },
  binput: {
    width: '95%',
    backgroundColor: '#93FEF9',
    borderRadius: 50,
    // borderWidth: 1,
    // borderColor: '#37DAD3',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10
  },
  posts: {
    backgroundColor: 'white',
    position: 'relative',
    width: '90%',
    //height: 110,
    // left: 0,
    top: -80,
    borderRadius: 20,
    margin: 5,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: '#37DAD2',
    padding: 15,

  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20, // Adjust the bottom value to position the button as desired
    right: 20, // Adjust the right value to position the button as desired
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    width: 65,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'relative',
  },
  modalContent: {
    backgroundColor: 'white',
    //padding: 20,
    borderRadius: 10,
    width: 300,
  },
  postinput: {
    height: 100,
    borderColor: 'gray',
    //borderWidth: 1,
    borderTopWidth: 1,
    //borderBottomWidth: 1,
    //marginTop: 10,
    //marginBottom: 10,
    padding: 10,
    width: '100%',
    //borderRadius: 10,
    textAlignVertical: 'top',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    //marginTop: 10,
    //marginBottom: 10,
    padding: 10,
    borderRadius: 50,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 20,
    borderRadius: 5,
    //width: 100,
    top: 10,
  },
  addButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 100,
    top: 10,
  },
  cancelButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  addPost: {
    flex: 1,
    fontSize: 20,
    margin: 0,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  closeButton: {
    //marginLeft: 'auto',
    position: 'relative',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  postText: {
    fontSize: 14,
    //fontWeight: 'bold',
    color: 'black',
    marginTop: 8,
    maxHeight: 180,

    marginLeft: 0,
    // Add any other styles you want for the post text
  },
  characterCount: {
    color: 'gray',
    marginTop: 5,
    marginRight: 20,
    textAlign: 'right',
  },
  postButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  commentButton: {
    //backgroundColor: 'blue',
    // paddingHorizontal: 10,
    // paddingVertical: 5,
    // borderRadius: 5,
    marginRight: 10,
  },
  deleteButton: {
    //backgroundColor: 'red',
    // paddingHorizontal: 10,
    // paddingVertical: 5,
    // borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  optionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  tabBar: {
    backgroundColor: '#FFFFFF',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#DDDDDD',
    elevation: 4,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  buttonContainernav: {
    backgroundColor: 'lightblue',
    marginTop: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //paddingHorizontal: 20,
    padding: 12,
    // Other button container styles
  },
  buttonnav: {
    backgroundColor: 'lightblue',
    // padding: 0,
    // marginRight: 20,
    // marginLeft: 20,
    //borderRadius: 5,
    // Other button styles
  },
  postProfilePicture: {
    //position: 'relative',
    width: 25,
    height: 25,
    //left: 0,
    //flex: 1,
    //justifyContent: 'center',
    //alignContent: 'center',
    borderColor: '#37DAD2',
    borderWidth: 1,
    //borderColor: 'white',
    //borderWidth: 1,
    borderRadius: 140,
  },
  postProfilePictureview: {

    flexDirection: 'row',
    //padding: 5,
    //justifyContent: 'space-around',

  },
  postTextview: {
    //borderColor: 'black',
    //borderWidth: 1,
  }
});

export default styles;
