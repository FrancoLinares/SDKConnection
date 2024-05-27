import React from 'react';
import { Text } from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

function CustomCamera() {
  const device = useCameraDevice('back');
  const { hasPermission } = useCameraPermission();
  if (!hasPermission) {
    return <Text>No access to camera</Text>;
  }
  if (device == null) {
    return <Text>No device</Text>;
  }
  return <Camera device={device} isActive={true} />;
}

export default CustomCamera;
