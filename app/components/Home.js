import React, { Component, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, ScrollView, TouchableOpacity, Alert, Modal } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import styles from '../../styles';
import { v4 as uuidv4 } from 'uuid';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [inputText, setInputText] = useState('');
    const [posts, setPosts] = useState([]);

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const generateUniqueId = () => {
        return uuidv4();
    };

    const addPost = () => {
        if (inputText) {
            const newPost = {
                id: generateUniqueId(),
                text: inputText,
                profileImage: require('../../assets/zn.png')
            };
            setPosts([newPost, ...posts]); // Prepend new post to the array
            setInputText('');
            setIsModalVisible(false);
        }
    };

    const deletePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    const confirmDeletePost = (post) => {
        Alert.alert(
            'Delete Post',
            'Are you sure you want to delete this post?',
            [
                {
                    text: 'No',
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: () => deletePost(post),
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.container}>

            <StatusBar style="auto" />
            <View>
                {/* <View style={styles.binput}>
          <TextInput style={styles.input} placeholder="Search" />
        </View> */}
            </View><ScrollView contentContainerStyle={styles.scrollContentContainer}>
                <View>
                    <Image style={styles.backImage} source={require('../../assets/background.jpg')} />
                </View>
                <View>
                    <Image style={styles.profileImage} source={require('../../assets/zn.png')} />
                </View>

                {posts.map((post, index) => (
                    <View key={index} style={styles.posts}>
                        <View style={styles.postProfilePictureview}>
                            <Image source={post.profileImage} style={styles.postProfilePicture} />
                            <Text>   Zaid Nezam</Text>
                        </View>
                        <View style={styles.postTextview}>
                            <Text style={styles.postText}>{post.text}</Text>
                        </View>
                        <View style={styles.postButtons}>
                            <TouchableOpacity style={styles.commentButton}>
                                <MaterialIcons name="comment" size={15} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deleteButton} onPress={() => confirmDeletePost(post)}>
                                <MaterialIcons name="delete" size={15} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView><View style={styles.container}>
                {/* ... */}
                <TouchableOpacity onPress={() => setIsModalVisible(true)} style={styles.buttonContainer}>
                    <MaterialIcons name="add-circle" size={55} color="black" />
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={() => setIsModalVisible(false)}
                >
                    <View style={styles.modalContainer}>

                        <View style={styles.modalContent}>
                            <View style={styles.header}>
                                <Text style={styles.addPost}>Add Post</Text>
                                <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                                    <MaterialIcons name="close" size={24} color="black" />
                                </TouchableOpacity>
                            </View>

                            <TextInput
                                style={styles.postinput}
                                placeholder="What's on your mind..."
                                onChangeText={(text) => setInputText(text)}
                                value={inputText}
                                multiline={true}
                                numberOfLines={4}
                                maxLength={140} />
                            <Text style={styles.characterCount}>{140 - inputText.length}</Text>
                            <TouchableOpacity style={styles.addButton} onPress={addPost}>
                                <Text style={styles.addButtonText}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </View >
    )
}

export default Home;