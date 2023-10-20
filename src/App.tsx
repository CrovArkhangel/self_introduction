import Header from 'Header'
import './App.css'
import { RouterConfig } from './RouterConfig'
import { Box, ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Box position={'fixed'} left={'0'} top={'0'} width={'100%'} zIndex={'dropdown'} bgColor={'white'}>
        <Header />
      </Box>
      <RouterConfig />
    </ChakraProvider>
  )
}

export default App
