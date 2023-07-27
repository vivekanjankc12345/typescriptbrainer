import React, { useState } from 'react'
import { Box, Button, Flex, FormLabel, Input, Text, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postlogin } from '../Redux/action';
const Login = () => {
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
      let data={email,password};
      const toast=useToast()
      const dispatch=useDispatch()
      const login=()=>{
       if(email!==""&&password!=="")
       {
          dispatch(postlogin(data))
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
      const navigate=useNavigate();
      const register=()=>{
        navigate("/register")
      }
      const goback=()=>{
        navigate("/")
      }
  return (
    <Box>
    <Text textAlign={"center"} fontSize={"30px"} >Login</Text>
    <Box ml={"40%"} mt={"10%"} border={"1px solid gray"} w={"30%"} borderRadius={"7%"}>
        
        <Box mt={"2%"}>
            <FormLabel  mt={"3%"} ml={"2%"}>Email</FormLabel>
            <Input ml={"4%"} w="60%" mt={"1%"} placeholder='Email' type='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
        </Box>
        <Box mt={"2%"}>
            <FormLabel  mt={"3%"} ml={"2%"}>Password</FormLabel>
            <Input ml={"4%"} w="60%" mt={"1%"} placeholder='Password' type='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        </Box>
        <Box mt={"2%"}>
            <Button ml={"30%"} onClick={login}>Login</Button>
        </Box>
        <Box mt={"3%"}>
        <Flex>
        <Button ml={"2%"} mb={"2%"} onClick={goback}>Goback to Home Pages</Button>
        <Button ml={"20%"} mb={"2%"} onClick={register}>Register</Button>
        </Flex>
           
        </Box>
    </Box>
   </Box>
  )
}

export default Login
