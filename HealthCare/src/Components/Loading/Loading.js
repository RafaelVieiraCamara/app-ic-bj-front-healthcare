import { View, Modal, ActivityIndicator } from 'react-native';

export default function Loading({ visible }) {
    return (
        <Modal transparent visible = {visible}>
            <View style = {{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator
                size = 'large'
                color= '#E8E7E7'
                animating={true}
                 />   
            </View>
        </Modal>
    );
}