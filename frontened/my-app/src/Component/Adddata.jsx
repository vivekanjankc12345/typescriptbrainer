import React, { useState } from 'react'
import { Box, Button, Flex, FormLabel, Input, Text, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adddata } from '../Redux/action';
const Adddata = () => {
    const [image,setimage]=useState("");
    const [name,setname]=useState("");
    const [description,setdescription]=useState("");
    const [price1,setprice]=useState("");
    const [quantity1,setquantity]=useState("")
    const navigate=useNavigate();
    const dispatch=useDispatch()
    let price=parseInt(price1)
    let quantity=parseInt(quantity1)
   const data={image,name,description,price,quantity}
   
   const toast=useToast();
   const adddata1=()=>{
    if(image!==""&&name!==""&&description!==""&&quantity!==""&&price!=="")
    {
        console.log(data)
        dispatch(adddata(data))
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
   const goback=()=>{
navigate("/")
   }
   const login=()=>{
navigate("/login")
   }
  return (
    <Box>
    <Text textAlign={"center"} fontSize={"30px"} >ADD PRODUCT</Text>
    <Box ml={"40%"} mt={"2%"} border={"1px solid gray"} w={"30%"} borderRadius={"7%"}>
        <Box mt={"2%"}>
            <FormLabel mt={"3%"} ml={"2%"}>Image_url</FormLabel>
            <Input ml={"4%"} w="60%" mt={"1%"} placeholder='Image_url' type='text' value={image} onChange={(e)=>setimage(e.target.value)}/>
        </Box>
        <Box mt={"2%"}>
            <FormLabel  mt={"3%"} ml={"2%"}>Name</FormLabel>
            <Input ml={"4%"} w="60%" mt={"1%"} placeholder='Name' type='text' value={name} onChange={(e)=>setname(e.target.value)}/>
        </Box>
        <Box mt={"2%"}>
            <FormLabel  mt={"3%"} ml={"2%"}>Description</FormLabel>
            <Input ml={"4%"} w="60%" mt={"1%"} placeholder='Description' type='text' value={description} onChange={(e)=>setdescription(e.target.value)}/>
        </Box>
        <Box mt={"2%"}>
            <FormLabel  mt={"3%"} ml={"2%"}>Price</FormLabel>
            <Input ml={"4%"} w="60%" mt={"1%"} placeholder='Price' type='text' value={price1} onChange={(e)=>setprice(e.target.value)}/>
        </Box>
        <Box mt={"2%"}>
            <FormLabel  mt={"3%"} ml={"2%"}>Quantity</FormLabel>
            <Input ml={"4%"} w="60%" mt={"1%"} placeholder='Quantity' type='text' value={quantity1} onChange={(e)=>setquantity(e.target.value)}/>
        </Box>
        <Box mt={"2%"}>
            <Button ml={"30%"} onClick={adddata1}>ADDDATA</Button>
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

export default Adddata
