import { StyleSheet } from 'react-native';

export default StyleSheet.create({

//shared
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#ffff',
    },
    rect2: {
        top: 15,
        width: 200,
        height: 300,
        position: "absolute",
        alignSelf: "center",
        shadowColor: '#353535',
        shadowOffset: { width: 1, height: 3 },
        shadowRadius: 4,
        shadowOpacity: 0.20,
        borderRadius: 5,
        backgroundColor: "#ffff",
    },
    rect3: {
        top: 90,
        width: '90%',
        height: 550,
        position:'relative',
        alignSelf: "center",
        shadowColor: '#353535',
        shadowOffset: { width: 1, height: 3 },
        shadowRadius: 4,
        shadowOpacity: 0.20,
        borderRadius: 5,
        backgroundColor: "#ffff",
    },
    rect2Stack: {
       margin: 7,
    },
    imageModal: {
        width: '100%',
        height: '100%',
    },
    textModal: {
        marginTop: 240,
        marginHorizontal: 20,
    },
    infoStack: {
        top: 23,
        left: 25,
        width: '93%',
        height: 141,
        position: "absolute",
        shadowColor: '#353535',
        shadowOffset: { width: 1, height: 3 },
        shadowRadius: 4,
        shadowOpacity: 0.20,
        borderRadius: 5,
        backgroundColor: "#ffff",

    },
    imageStack: {
        top: 0,
        left: 0,
        width: 100,
        height: 200,
        position: "absolute",
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.5,
    },
    cardStack: {
        height: 164,
        margin: 7,
    },
    image:{
        width: 100,
        height: 150
    },
    insidecard: {
        shadowColor: '#353535',
        shadowOffset: { width: 1, height: 3 },
        shadowRadius: 4,
        shadowOpacity: 0.20,
        borderRadius: 2,
        backgroundColor: '#ffff',
        elevation: 8,
        padding: 10,
        margin: 8,
        width: '90%',
        alignSelf: "flex-end"
    },
    containerModal: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    bookContainer: {
        padding: 16
    },
    cover: {
        width: 100,
        height: 150
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    author: {
        fontSize: 13,
        paddingTop: 5,
        paddingBottom: 5,
    },
    coverModal: {
        width: 100,
        height: 150
    },
    titleModal: {
        fontSize: 20,
        paddingTop: 10,
        fontWeight: 'bold'
    },
    authorModal: {
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
    },
    description: {
        fontSize: 12,
        paddingTop: 10,
    },
    imageContainer: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.5,
    },
    linetop: {
        borderWidth: 1,
        borderTopWidth: 0.1,
        width: '100%',
        borderColor: '#353535'
    },
    linebot: {
        borderWidth: 1,
        borderColor: '#353535',
        margin: 10,
    },
    preview: {
        position: 'absolute',
        left: 100,
        top: 30,
        width: '50%',
        height: '50%'
    },
    footer: {
        height: 50
    },

    //SearchBooks
    buttonStyleSave: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        justifyContent: "center",
        marginBottom: 40,
        width: 220,
        height: 45,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#6B9080",
        backgroundColor: "#6B9080",
    },
    buttonStyleSaveInside: {
        flexDirection:"row",
        justifyContent: 'center',
    },
    buttonStyleSaveInsideText: {
        alignSelf: "center",
        paddingLeft:10,
        color: "#ffff",
        fontWeight: "bold"
    },
    buttonSearch: {
        width: 55,
        height: 40,
        paddingLeft:13,
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#284B63',
        backgroundColor: '#284B63',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#F2F8F6',
        borderRadius: 5,
        backgroundColor: '#F2F8F6',
        width: '96%',
        height: 40,
        padding: 8,
    },
    SearchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        paddingBottom: 5,
        paddingTop: 10
    },
    loading: {
        padding: 15,
        alignSelf:"center"
    },


    //MyShelf
    swipeDown:{
        alignSelf:"center",
        color:"#9E9E9E",
        opacity: 0.5,
        paddingTop: 10
    },
    headerContainer: {
        backgroundColor: '#ffff',
        flexDirection:"row",
        paddingBottom: 5,
        margin: 8,
    },
    headerContainerText:{
        fontSize: 15,
    },
    buttonStyle: {
        width: 100,
        paddingRight: 10
    },
    buttonStyleModal: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        marginBottom: 40
    },
    buttonStyleRemove: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        marginBottom: 40
    },
    saveButton: {
        position: 'absolute',
        right: 0,
        top:'40%',
        alignSelf: 'center',
        marginRight: 20
    },

    //Settings
    settingsContainer: {
        width: '96%',
        height: 150,
        backgroundColor: "#ffff",
        alignSelf: "center",
        paddingTop: 10,
    },
    resetContainer: {
        height: 40,
        flexDirection: "row",
        flex: 1,
        marginRight: 17,
        marginLeft: 15,
    },
    textStReset: {
        color: "#121212",
        marginTop: 13,
        paddingLeft: 5
    },
    resetButton: {
        marginLeft: 160,
        marginTop: 6,
    },

    darkmodeContainer: {
        height: 40,
        flexDirection: "row",
        flex: 1,
        marginRight: 17,
        marginLeft: 15,

    },
    darkmodeButton: {
        marginLeft: 160
    },
    textStDark: {
        color: "#121212",
        marginTop: 13,
        paddingLeft: 10
    },
    info:{
        position:"absolute",
        bottom:10,
        alignSelf:"center",
        color:"#9E9E9E",
        opacity: 0.5,
    }

});
