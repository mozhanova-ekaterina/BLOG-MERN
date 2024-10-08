import { Card, Heading, Text } from '@radix-ui/themes'
import React from 'react'

const Post = ({title, text}) => {
  return (
    <Card>
      <Heading>{title}</Heading>
      <Text wrap={'pretty'}>{text}</Text>
    </Card>
  )
}

export default Post