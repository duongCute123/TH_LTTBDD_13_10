import React from "react";
import { Component } from "react";
import UseFetch from "../ConfigAPi/ConfigApi";
import { Text, View, TextInput, Image, Button } from "react-native";
import axios from "axios"
const SinhVien = ({ sinhvien: { id, fullname, age ,avatar} }) => {
    const btnXoa = () => {
        axios.post("https://633e2bdbc235b0e5751fe7a6.mockapi.io/getSinhVien/" +"1")
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    return (
        <View>
            <Text>{fullname}</Text>
            <Text>{id}</Text>
            <Text>{age}</Text>
            <Image source={avatar}></Image>
            <Button title="Delete" onPress={btnXoa} color={"red"}></Button>
        </View>
    )
}
const CallSinhVien = () => {
    const url = 'https://633e2bdbc235b0e5751fe7a6.mockapi.io/getSinhVien'
    const data = UseFetch(url)
    return (
        <View>
            
            <Text>Số sinh viên lấy được là {data.length}</Text>
            <View>
                {
                    data.map((sinhvien) => (
                        <SinhVien sinhvien={sinhvien} />
                    ))
                }
            </View>
        </View>
    )
}
export default CallSinhVien