import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Box,Center,Flex, ChakraProvider } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <ChakraProvider>
      <Box bg='tomato' w='100%' p={4} color='white'>
  This is the Box
</Box>
<Box>
  <Center bg="blue" color="white" >Hello World</Center>
</Box>
<Flex>
  <Box flex="2" >1</Box>
  <Box flex="1" >2</Box>
  <Box flex="1" >3</Box>
  <Box flex="1" >4</Box>
</Flex>
     
     </ChakraProvider>
          
    
  )
}

export default App
