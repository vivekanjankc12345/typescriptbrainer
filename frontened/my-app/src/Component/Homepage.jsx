import { Box, Flex, Select,Text,Image, Button, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getdata, searchdata, sortdata } from '../Redux/action';
import "./Home.css"
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const dispatch=useDispatch();
    const data=useSelector((store)=>store.data)
    const [count,setcount]=useState(1)
    const [sort,setsort]=useState("")
    const [search,setsearch]=useState("")
    const log=useSelector((store)=>store.login)
    // console.log(log[0].username)
    useEffect(()=>{
        if(sort!=="")
        {
              dispatch(sortdata(sort))
        }
        else if(search!=="")
        {
            
            dispatch(searchdata(search))
        }
        else
        {
            dispatch(getdata(count))
        }
      
    },[dispatch,count,sort,search])
    console.log(data)
    const inc=()=>{
        setcount(count+1)
    }
    const des=()=>{
        setcount(count-1)
    }
    console.log(sort)
    const navigate=useNavigate();
    const login=()=>{
navigate("/login")
    }
    const register=()=>{
        navigate("/register")
    }
    const addpage=()=>{
navigate("/adddata")
    }
    const home1=()=>{
        navigate("/")
    }
  return (
    <>
<Box w="100%" border="1px solid aquamarine" h="90px" id='navbar'>
<Flex>
<Box ml={"10%"} mt={"1%"}>
    <Text onClick={home1} color={"tear"} fontSize={"30px"} >BrainerHub Solutions</Text>
</Box>
    <Box ml={"6%"} mt={"1%"}>
        <Button onClick={login}>Login</Button>
    </Box>
    <Box ml={"5%"} mt={"1%"}>
        <Button onClick={register}>Register</Button>
    </Box>
    <Box ml={"5%"} mt={"1%"}>
        <Button onClick={addpage}>Addproducts</Button>
    </Box>
    <Box ml={"5%"} mt={"1%"}>
        <Input placeholder='search by name' type='text' value={search} onChange={(e)=>setsearch(e.target.value)}  />
    </Box>
    <Box ml={"2%"} mt={"1%"}>
        { log.length>0&&log[0].username}
    </Box>
</Flex>
</Box>
<Box mt={"1%"}>
    <Flex>
        <Select w="20%" placeholder='Sort by price' onChange={(e)=>setsort(e.target.value)} value={sort}>
            <option value={"asc"}>Low to high</option>
            <option value={"desc"}>High to Low</option>
        </Select>
        <Box>
<Flex ml={"150%"} mt={"2%"}>
<button style={{width:"200px",height:"40px", border:"1px solid red",borderRadius:"10px",color:"white",background:"red"}} onClick={des} disabled={count===1}>Prev</button>
    <Text ml={"1%"} mr={"1%"}>{count}</Text>
    <button style={{width:"200px",height:"40px", border:"1px solid red",borderRadius:"10px",color:"white",background:"red"}} onClick={inc} >next</button>
</Flex>
    
</Box> 
    </Flex>
</Box>

<Box id='grid'>
    {data.length>0&&data.map((el)=>{
        return(
           <Box id='gridbox' key={el._id}>
              <Image id='img' src={el.image} />
              <Text ml={"1%"} mt={"1%"}>{"Name: "}{"    "}{el.name}</Text>
              <Text ml={"1%"} mt={"1%"}>{"Description:  "}{"      "}{el.description}</Text>
              <Flex>
              <Text ml={"1%"} mt={"1%"}>{"Price:  " }{"  "}{el.price}</Text>
              <Text ml={"50%"} mt={"1%"}>{"Quantity: "}{"  "}{el.quantity}</Text>
              </Flex>
           </Box>
        )
    })}
</Box>

    </>
   
  )
}

export default Homepage
