import React from "react";
import { Component } from "react";
import axios from "axios"
import { useState, useEffect } from "react";
import { Text, View, TextInput, Button } from "react-native";
const UpdateSinhVien = () => {
    const [mssv, setMasSV] = useState('')
    const [fullname, setFullName] = useState('')
    const [age, setAge] = useState('')
    const [urlImage, setUrlImage] = useState('')
    const btnUpdate = (e) => {
        e.preventDefault()
        axios.get('https://633e2bdbc235b0e5751fe7a6.mockapi.io/' + `${mssv}`)
            .then(res => {
                setMasSV(res.data.mssv)
                setFullName(res.data.fullname)
                setAge(res.data.age)
                setUrlImage(res.data.urlImage)
            })
            .catch(err => console.log(err))
        axios.post('https://633e2bdbc235b0e5751fe7a6.mockapi.io/', +`${mssv}`, mssv, fullname, age, urlImage)
            .then(res => res.status(200))
            .catch(err => console.log(err))
    }
    return (
        <View>
            <Text>Trang cập nhật thông tin</Text>
            <Text>Nhập tên sinh viên</Text>
            <TextInput placeholder="Vui lòng nhập tên sinh viên" value={fullname} onChange={e => setFullName(e.target.value)}></TextInput>
            <Text>Nhập tuổi của sinh viên nhá</Text>
            <TextInput placeholder="Vui lòng nhập tuổi của sinh viên" value={age} onChange={e => setAge(e.target.value)}></TextInput>
            <Text>Nhập ảnh sinh viên yêu thích vào nhá</Text>
            <TextInput placeholder="Vui lòng nhập ảnh sinh viên yêu thích vào" value={urlImage} onChange={e => setUrlImage(e.target.value)}></TextInput>
            <Text></Text>
            <Button title="Update" onPress={btnUpdate}></Button>
        </View>
    )
}
export default UpdateSinhVien