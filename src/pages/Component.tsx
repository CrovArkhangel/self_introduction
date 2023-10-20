import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  HStack,
  Heading,
  Stack,
  StackDivider,
  Text,
  VStack
} from '@chakra-ui/react'
import CardComponent from 'components/CardComponent'

const Component = () => {
  const userData = [
    {
      userIcon: '/IMG_7528.JPG',
      userName: '黒田慧',
      userProfession: '大学生',
      userBirthplace: 'JR,地下鉄,京阪,バスがあり、交通手段が充実しています！後めっちゃ山に囲まれています。',
      userHobby: 'ゲームが好きでMincraftやValorantにハマってます。',
      userComment: 'react難しい'
    },
    {
      userIcon: '/ega.jpg',
      userName: 'エーデルガルト',
      userProfession: '皇帝',
      userBirthplace: 'フォドラ南部から西部にかけて統治しているフォドラ最大の国家にして、1200年近い歴史のある大国です!',
      userHobby: '	読書や一人で散策するのが好きです。',
      userComment: ''
    },
    {
      userIcon: '/goku.jpeg',
      userName: '孫悟空',
      userProfession: '武闘家',
      userBirthplace: 'JR,地下鉄,京阪,バス交通手段が充実していて利便性が高いです！',
      userHobby: '強い相手を見つけて戦う事が好きです。',
      userComment: ''
    }
  ]
  return (
    <Box>
      <Center mt={24}>
        <VStack spacing={8}>
          {userData.map((data) => (
            <CardComponent 
              userIcon={data.userIcon}
              userName={data.userName}
              userProfession={data.userProfession} 
              userBirthplace={data.userBirthplace} 
              userHobby={data.userHobby}
              userComment={data.userComment}
            />
          ))}
        </VStack>
      </Center>
    </Box>
  )
}

export default Component
