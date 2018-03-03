import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    
const {containerStyle, cardSectionStyle, textStyle} = Styles;

    return(
        <Modal
            animationType="slide"
            onRequestClose={() => {}}
            transparent
            visible={visible}
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>
                        {children}
                    </Text>
                </CardSection>

                <CardSection>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    );
};

const Styles = {
    cardSectionStyle: {
        justifyContent: 'center',
    },

    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },

    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
}
//Its worth nothing that in the buttons above, we're not using bind and immediately invoking the function
//b.c we're just referring a function to be called
export { Confirm };