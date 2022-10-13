import React from "react";
import { Component } from "react";
import UseFetch from "../ConfigAPi/ConfigApi";
import { Text,View,TextInput,Image, Button } from "react-native";
const SinhVien=({sinhvien:{mssv,fullname,age}})=>{
    return(
        <View>
            <Text>{fullname.toUpperCase()}</Text>
            <Text>{mssv}</Text>
            <Text>{age}</Text>
            <Button title="Delete" color={"red"}></Button>
        </View>
    )
}
const CallSinhVien=()=>{
    const url='https://633e2bdbc235b0e5751fe7a6.mockapi.io'
    const data=UseFetch(url)
    return(
        <View>
            <Text>Số sinh viên lấy được là {data.length}</Text>
            <View>
                {
                    data.map((sinhvien)=>(
                        <SinhVien sinhvien={sinhvien}/>
                    ))
                }
            </View>
        </View>
    )
}
export default CallSinhVien