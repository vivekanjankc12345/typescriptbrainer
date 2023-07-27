import { Box, Button, Flex, FormLabel, Input, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postregister } from '../Redux/action';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username,setusername]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
      let data={username,email,password};
      const dispatch=useDispatch()
      const toast = useToast()
      const reg=useSelector((store)=>store.register)
      console.log(reg)
    
      const register=()=>{
        if(username!==""&&email!=="" &&password)
        {
            dispatch(postregister(data))
        }
        else
        {
            toast({
               
                description: `Fill all the feild`,
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
        }
      
       
    }
    const navigate=useNavigate()
   const goback=()=>{
    navigate("/")
   } 
   const login=()=>{
    navigate("/login")
   } 
   
  return (
   <Box>
    <Text textAlign={"center"} fontSize={"30px"} >Register</Text>
    <Box ml={"40%"} mt={"10%"} border={"1px solid gray"} w={"30%"} borderRadius={"7%"}>
        <Box mt={"2%"}>
            <FormLabel mt={"3%"} ml={"2%"}>Username</FormLabel>
            <Input ml={"4%"} w="60%" mt={"1%"} placeholder='Username' type='text' value={username} onChange={(e)=>setusername(e.target.value)}/>
        </Box>
        <Box mt={"2%"}>
            <FormLabel  mt={"3%"} ml={"2%"}>Email</FormLabel>
            <Input ml={"3%"} w="60%" mt={"1%"} placeholder='Email' type='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
        </Box>
        <Box mt={"2%"}>
            <FormLabel  mt={"2%"} ml={"2%"}>Password</FormLabel>
            <Input ml={"3%"} w="60%" mt={"1%"} placeholder='Password' type='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        </Box>
        <Box mt={"2%"}>
            <Button ml={"30%"} onClick={register}>Register</Button>
        </Box>
        <Box mt={"3%"}>
        <Flex>
        <Button ml={"2%"} mb={"2%"} onClick={goback}>Goback to Home Pages</Button>
        <Button ml={"20%"} mb={"2%"} onClick={login}>Login</Button>
        </Flex>
           
        </Box>
    </Box>
   </Box>
  )
}

export default Register
