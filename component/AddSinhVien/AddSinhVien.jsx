import React from "react";
import { Component } from "react";
import axios from "axios"
import { Text,View,TextInput,Image, Button } from "react-native"; 
import { useState,useEffect } from "react";
const AddSinhVien=()=>{
    const [id,setMasSV]=useState('')
    const [fullname,setFullName]=useState('')
    const [age,setAge]=useState('')
    const [avatar,setUrlImage]=useState('')
    const btnAdd=(e)=>{
        e.preventDefault()
        axios.post('https://633e2bdbc235b0e5751fe7a6.mockapi.io/getSinhVien',id,fullname,age,avatar)
        .then(res=>console.log(res.data))
    }
    console.log(avatar);
    return(
        <View>
            <Text>Trang thêm sinh viên nhé</Text>
            <Text>Nhập mã số sinh viên cần thêm nhá</Text>
            <TextInput placeholder="Vui lòng nhập mã số sinh viên vào" value={id} onChange={e=>setMasSV(e.target.value)}></TextInput>
            <Text>Nhập tên sinh viên</Text>
            <TextInput placeholder="Vui lòng nhập tên sinh viên" value={fullname} onChange={e=>setFullName(e.target.value)}></TextInput>
            <Text>Nhập tuổi của sinh viên nhá</Text>
            <TextInput placeholder="Vui lòng nhập tuổi của sinh viên" value={age} onChange={e=>setAge(e.target.value)}></TextInput>
            <Text>Nhập ảnh sinh viên yêu thích vào nhá</Text>
            <TextInput placeholder="Vui lòng nhập ảnh sinh viên yêu thích vào" value={avatar} onChange={e=>setUrlImage(e.target.value)}></TextInput>
            <Text></Text>
            <Button title="ADD" onPress={btnAdd}></Button>
        </View>
    )
}
export default AddSinhVien