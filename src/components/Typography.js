import { StyleSheet, Text } from 'react-native';
import React from 'react';
import {Fonts} from "../../assets/fonts/fonts" 



export const Typography = ({
    size = 14,
    fonts,
    children,
    type=Fonts?.PoppinsMedium,
    color ,
    textAlign, 
    style = {},
    numberOfLines,
    lineHeight,
    textDecorationLine,
    ...props
}) => {
    return (
        <Text
            numberOfLines={numberOfLines}
            style={[
                {
                    textDecorationLine: textDecorationLine,
                    fontFamily: type,
                    fontSize: size,
                    color,
                    textAlign: textAlign, 
                    textAlignVertical: 'center',
                    lineHeight: lineHeight,
                    fontWeight: fonts,
                },
                style, 
            ]}
            {...props}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({});
