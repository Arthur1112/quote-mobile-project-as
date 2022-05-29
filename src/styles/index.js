import { StyleSheet } from "react-native";


export default StyleSheet.create({

    container: {
        flex: 1,
        width:'100%',
        backgroundColor: '#00000044',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 0,
    },
    quoteCard: {
      alignContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginVertical: 10,
      backgroundColor: 'black',
      borderColor: 'gold',
      borderWidth: 1,
      color: 'blue',
      borderRadius: 5,
      margin: 4,
    },
    text: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    authorName: {
        marginHorizontal: 12,
        fontSize: 22,
        fontWeight: '600',
        marginTop: 15,
        marginBottom: 10,
        color: 'white',
        fontStyle: 'Cursive',
    }
  })