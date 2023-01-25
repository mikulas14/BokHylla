import React, {useEffect, useState} from 'react';
import {
    FlatList,
    View,
    Text,
    TextInput,
    Modal,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
} from 'react-native';
import styles from "../styles/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Spinner from "../components/Spinner";
import Ionicons from "react-native-vector-icons/Ionicons";
import {searchOpenLibrary} from "../api/api";



const SearchBooks = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    //book details
    const showBookDetails = (book) => {
        setSelectedBook(book);
    }

    const handleSave = async (book) => {
        try {
            // Get the current books stored in the storage
            const booksJson = await AsyncStorage.getItem('books');
            let books = booksJson ? JSON.parse(booksJson) : [];
            const existingBook = books.find(b => b.title === book.title && b.author === book.author);

            //Check for already stored books
            if(existingBook){
                Alert.alert(
                    'Book in Storage',
                    `The book ${book.title} is currently in storage.`,
                    [
                        {text: 'OK'},
                    ],
                    { cancelable: true }
                );
            }
            else{
                // Add the new book to the array of books
                books.push(book);
                // Save the updated array of books to the storage
                await AsyncStorage.setItem('books', JSON.stringify(books));
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        searchOpenLibrary(query)
            .then((data) => {
                setResults(data.docs);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    }, [query]);


    return (
        <View style={styles.container}>

            <View style={styles.SearchContainer}>
                <TextInput
                    clearButtonMode="while-editing"
                    placeholder="Search for a book"
                    style={styles.textInput}
                    value={query}
                    onChangeText={text => setQuery(text)}
                />
            </View>

            {isLoading ?
                <View style={styles.loading}>
                    <Spinner></Spinner>
                </View> :

                <View>
                    {error ? <Text>{error.message}</Text> :
                        <FlatList
                            data={results}
                            renderItem={({ item }) =>(

                                <View>
                                    <TouchableOpacity onPress={() => showBookDetails(item)}>
                                        <View style={styles.cardStack}>
                                            <View style={styles.infoStack}>
                                                <View style={styles.preview}>
                                                    <Text style={styles.title}>{item.title_suggest}</Text>
                                                    <Text style={styles.author}> Author: {item.author_name}</Text>
                                                </View>
                                            </View>
                                            <View style={styles.imageStack}>
                                                <Image style={styles.image} source={{ uri: `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg` }}/>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )}
                            keyExtractor={item => item.key}
                        />
                    }
                    <Modal visible={selectedBook !== null}>
                        {selectedBook && (
                            <View style={styles.containerModal}>
                                <View style={styles.buttonStyleClose}>
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
                        <View style={styles.footer}>

                            <View style={styles.buttonStyleSave}>
                                <TouchableOpacity onPress={() => handleSave(selectedBook)}>
                                    <View style={styles.buttonStyleSaveInside}>
                                        <Ionicons  name="heart" size={25} color="#E5625E" />
                                        <Text style={styles.buttonStyleSaveInsideText}>Save to Shelf</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
            }
        </View>
    );
};

export default SearchBooks;
