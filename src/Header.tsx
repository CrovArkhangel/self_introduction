import { Box, Flex, Image, Link, Spacer, Text } from '@chakra-ui/react'

const Header = () => {
  return (
    <>
      <Box px={4} bgColor={'blue.800'}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <Box cursor={'pointer'}>
            <Link>
              <Image src="/logo192.png" alt="ReactLOGO" h="50px" />
            </Link>
          </Box>
          <Spacer />
          <Text color={'white'}>要素を追加してみよう！</Text>
        </Flex>
      </Box>
    </>
  )
}

export default Header
