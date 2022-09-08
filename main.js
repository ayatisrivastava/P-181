import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet, Text, View, SafeAreaView, Platform, Image, ScrollView, TouchableOpacity} from "react-native";
import {Camera}  from "expo-camera";
import * as FaceDetector from "expo-face-detector";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,
                faces : []
        };
        this.onFacesDetected = this.onFacesDetected.bind(this)
    }
    async componentDidMount() {
        const {status} await Camera.requestPermissionsAsync()
        this.setState({ 
            hasCameraPermission: 
            status === 'granted' 
        })
    }
    onFacesDetected({faces}) {
         this.setState({ 
            faces: faces 
        })
    }
    onFacesDetected = (faces) => {
        this.setState({
            faces : faces
        })
    }
    onFacesDetectionError = (error) => {
        console.log("Error")
    }
    render(){
        return (
            <View style = {styles.middleContainer}>

                <Camera style = {{ flex: 1 }}
                type = {Camera.Constants.Type.front}
                faceDetectorSettings = {{
                    mode: FaceDetector.Constants.Mode.fast,
                    detectLandmarks: FaceDetector.Constants.Landmarks,all,
                    runClassifications: FaceDetector.Constants.Classifications.all
                }}
                onFacesDetected = {this.onFacesDetected}
                onFacesDetectionError={this.onFacesDetectionError}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    middleContainer : {}
})