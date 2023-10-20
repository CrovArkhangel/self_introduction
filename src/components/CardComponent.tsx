import { Avatar, Box, Button, Card, CardBody, CardHeader, HStack, Heading, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Stack, StackDivider, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
  userIcon: string;
  userName: string;
  userProfession: string;
  userBirthplace: string;
  userHobby: string;
  userComment: string;
}

const CardComponent: React.FC<Props> = ({ userIcon, userName, userProfession, userBirthplace, userHobby, userComment }) => {
  return (
    <Card>
      <CardHeader>
        <HStack>
          <Heading size="md">自己紹介</Heading>
          <Avatar name={userName} src={userIcon} />
          <Text>【名前】{userName}</Text>
          <Text>【職業】{userProfession}</Text>
        </HStack>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs">出身地について</Heading>
            <Text pt="2" fontSize="sm">
            {userBirthplace}
            </Text>
          </Box>
          <Box>
            <Heading size="xs">趣味について</Heading>
            <Text pt="2" fontSize="sm">
            {userHobby}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              ひとこと
            </Heading>
            <Text pt="2" fontSize="sm">
              {userComment}
            </Text>
          </Box>
          <Box>
            <Popover>
              <PopoverTrigger>
              <Button color={'white'} colorScheme='green'>
                <Text fontWeight={'thin'}>
                詳細を見る
                </Text>
              </Button>
              </PopoverTrigger>
              <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
                <PopoverHeader>好きな食べ物</PopoverHeader>
                <PopoverBody>寿司</PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default CardComponent