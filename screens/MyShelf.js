import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, FlatList, Image, Modal, Alert, ScrollView} from 'react-native';
import { RefreshControl } from 'react-native';
import styles from "../styles/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "react-native-vector-icons/Ionicons";


const MyShelf = () => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

    //get book details
    const showBookDetails = (book) => {
        setSelectedBook(book);
    };

    useEffect(() => {
        getBooks();
    }, []);

    //load books from storage
    const getBooks = async () => {
        // Get all saved books from persistent storage
        AsyncStorage.getItem('books').then(storedBooks => {
        setBooks(JSON.parse(storedBooks));
        });
    };

    //remove book from list
    const removeBooks = async (item) => {
        try {
            Alert.alert(
                'Delete Book',
                'Are you sure you want to delete this book?',
                [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                    {text: 'Yes', onPress: () => {
                        setBooks(books.filter(b => b !== item));
                        AsyncStorage.setItem('books', JSON.stringify(books.filter(b => b !== item)))}
                    },

                ],
                {cancelable: false},
            );

        } catch (error) {
            console.log(error);
        }

    };

    return (

        <View style={styles.container}>
            {/*<View style={styles.headerContainer}>*/}
            {/*    <Text style={styles.headerContainerText}>Saved Books: {booksCount}</Text>*/}
            {/*</View>*/}
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={''}
                        onRefresh={getBooks}
                    />
                }
            >
                <Text style={styles.swipeDown}>Swipe <Ionicons  name="arrow-down-outline" size={15} color="#E54B4B" /> to refresh</Text>

                <View>
                    <FlatList
                        data={books}
                        renderItem={({item}) => (
                            <View>
                                <TouchableOpacity onPress={() => showBookDetails(item)}>

                                    <View style={styles.cardStack}>
                                        <View style={styles.infoStack}>
                                            <View style={styles.preview}>
                                                <Text style={styles.title}>{item.title_suggest}</Text>
                                                <Text style={styles.author}>Author: {item.author_name}</Text>
                                            </View>
                                            <View style={styles.saveButton}>
                                                <TouchableOpacity onPress={() => removeBooks(item)}>
                                                    <Ionicons  name="heart" size={35} color="#E54B4B" />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={styles.imageStack}>
                                            <Image style={styles.image} source={{ uri: `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg` }}/>
                                        </View>
                                    </View>

                                </TouchableOpacity>
                            </View>
                        )}
                        keyExtractor={item => item.id}
                    />

                    <Modal visible={selectedBook !== null}>
                        {selectedBook && (

                            <View style={styles.containerModal}>
                                <View>
                                    <TouchableOpacity onPress={() =>  setSelectedBook(null)}>
                                        <Ionicons  name="arrow-back-outline" size={30} color="#353535" />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.rect2Stack}>
                                    <View style={styles.rect3}>

                                        <View style={styles.textModal}>
                                            <Text style={styles.titleModal}>{selectedBook.title_suggest}</Text>
                                            <Text style={styles.authorModal}> Author: {selectedBook.author_name}</Text>

                                            <ScrollView>
                                                <Text style={styles.description}>Publisher: {selectedBook.publisher[0]}</Text>
                                                <Text style={styles.description}>Published Date: {selectedBook.first_publish_year}</Text>
                                                <Text style={styles.description}>Genre: {selectedBook.first_genres}</Text>
                                                <Text style={styles.description}>Language: {selectedBook.language}</Text>
                                                <Text style={styles.description}>Page Count: {selectedBook.edition_count}</Text>
                                                <Text style={styles.description}>Description: {selectedBook.subtitle}</Text>
                                            </ScrollView>
                                        </View>
                                    </View>

                                    <View style={styles.rect2}>
                                        <Image style={styles.imageModal} source={{ uri: `https://covers.openlibrary.org/b/id/${selectedBook.cover_i}-M.jpg`}} />
                                    </View>
                                </View>
                            </View>
                        )}
                    </Modal>
                </View>
            </ScrollView>
        </View>
    );
};

export default MyShelf;
