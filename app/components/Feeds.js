import React, { Component, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, ScrollView, TouchableOpacity, Alert, Modal } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import styles from '../../styles';
import { v4 as uuidv4 } from 'uuid';
import Icon from 'react-native-vector-icons/FontAwesome';

const Feeds = () => {
    return (
        <View style={styles.container}>

            <StatusBar style="auto" />
            <View>
                {/* <View style={styles.binput}>
              <TextInput style={styles.input} placeholder="Search" />
            </View> */}
            </View><ScrollView contentContainerStyle={styles.scrollContentContainer}>
                <View>
                    <Text> </Text>
                    <Text> </Text>
                    <Text> </Text>
                    <Text> </Text>
                    <Text> </Text>
                </View>
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>Feeds Screen Post</Text>
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
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>
                            <Image source={require('../../assets/zn.png')} />
                        </Text>
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
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>Feeds Screen Post</Text>
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
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>Feeds Screen Post</Text>
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
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>Feeds Screen Post</Text>
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
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>Feeds Screen Post</Text>
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
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>Feeds Screen Post</Text>
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
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>Feeds Screen Post</Text>
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
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>Feeds Screen Post</Text>
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
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>Feeds Screen Post</Text>
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
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>Feeds Screen Post</Text>
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
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>Feeds Screen Post</Text>
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
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>Feeds Screen Post</Text>
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
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>Feeds Screen Post</Text>
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
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>Feeds Screen Post</Text>
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
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>Feeds Screen Post</Text>
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
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>Feeds Screen Post</Text>
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
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>Feeds Screen Post</Text>
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
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>Feeds Screen Post</Text>
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
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>Feeds Screen Post</Text>
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
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>Feeds Screen Post</Text>
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
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>Feeds Screen Post</Text>
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
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>Feeds Screen Post</Text>
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
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>Feeds Screen Post</Text>
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
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>Feeds Screen Post</Text>
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
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>Feeds Screen Post</Text>
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
                <View style={styles.posts}>
                    <View style={styles.postProfilePictureview}>
                        <Image source={require('../../assets/zn.png')} style={styles.postProfilePicture} />
                        <Text>   Zaid Nezam</Text>
                    </View>
                    <View style={styles.postTextview}>
                        <Text style={styles.postText}>Feeds Screen Post</Text>
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
            </ScrollView><View style={styles.container}>
            </View>
        </View >
    )
}

export default Feeds;