import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const actionButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.loginButton} onPress={onPress}>
            
            <Text style={styles.loginButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    loginButton: {
        backgroundColor: '#ff6600',
        width: '90%',
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 28,
        marginBottom: 30,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: 'Poppins-Regular',

    },
});

export default actionButton;
