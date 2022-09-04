import type { NextPage } from 'next'

import {Text, Title, Box, Stack} from "@mantine/core";

const Home: NextPage = () => {
  return (
      <><Title align={"center"}>予約内容変更</Title>
          <Stack spacing={30} ml={50} mr={50}>
          <Box>
          <Text weight={"bold"}>利用日</Text>
          <Text>2022年4月1日(土)</Text>
          </Box>
          <Box>
          <Text weight={"bold"}>利用時間</Text>
          <Text>10:00〜18:00(8時間)</Text>
          </Box>
            <Box>
              <Text weight={"bold"}>人数</Text>
              <Text>2名</Text>
            </Box>
            <Box>
              <Text weight={"bold"}>有料オプション</Text>
              <Text>プロジェクター(2個/1,000円)</Text>
            </Box>
            <Box>
              <Text weight={"bold"}>利用目的</Text>
              <Text>趣味・遊び</Text>
            </Box>
            <Box>
              <Text weight={"bold"}>お支払い方法</Text>
              <Text>クレジットカード</Text>
              <Text>**** **** **** 1111</Text>

            </Box>
            <Box>
              <Text weight={"bold"}>内訳</Text>
              <Text>クレジットカード</Text>
              <Text>**** **** **** 1111</Text>
            </Box>
            <Box>
              <Text weight={"bold"}>内訳</Text>
              <Text>部屋代(5時間)</Text>
              <Text>オプション合計</Text>
            </Box>
            <Text color={'#E2E8F0'} sx={{ borderBottom: '1px solid' }} />



          </Stack>
      </>
  )
}

export default Home
