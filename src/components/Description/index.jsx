import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

function Description (props) {
  const { name, created_at: createdAt, login, bio } = props

  return (
    <>
      <Stack direction='row' justifyContent='space-between'>
        <Typography variant='h4'>{name ?? login}</Typography>
        <Typography>{createdAt}</Typography>
      </Stack>
      <Typography variant='caption'>@{login}</Typography>
      <Typography component='p' variant='body1' whiteSpace='normal'>{bio ?? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</Typography>
    </>
  )
}

export default Description
