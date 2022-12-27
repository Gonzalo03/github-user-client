import { Paper, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

function RepositoryStats (props) {
  const { followers, following, repositories } = props

  return (
    <Paper elevation={3}>
      <Stack direction='row' justifyContent='space-around' padding='20px'>
        <Box>
          <Typography>Repos</Typography>
          <Typography>{repositories}</Typography>
        </Box>
        <Box>
          <Typography>Followers</Typography>
          <Typography>{followers}</Typography>
        </Box>
        <Box>
          <Typography>Following</Typography>
          <Typography>{following}</Typography>
        </Box>
      </Stack>
    </Paper>
  )
}

export default RepositoryStats
