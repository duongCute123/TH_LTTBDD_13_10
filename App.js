import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddSinhVien from './component/AddSinhVien/AddSinhVien';
import CallSinhVien from './component/CallSinhVien/GetSinhVien';
import UpdateSinhVien from './component/UpdateSinhVien/UpdateSinhVien';
const App=()=>{
  return(
    <View>
      <UpdateSinhVien/>
    </View>
  )
}
export default App