import { Grid, Icon, Typography } from '@mui/material'
import { Twitter, Place, Domain, Language } from '@mui/icons-material'
import React from 'react'
import { Stack } from '@mui/system'

function RepositoryMetadata (props) {
  const { twitterUsername, location, company, blog } = props

  return (
    <Grid
      container
      padding='20px'
    >
      <Grid item xs={6} padding={4}>
        <Stack direction='column' gap={1}>
          <Stack direction='row' gap={2}>
            <Icon>
              <Place />
            </Icon>
            <Typography>{location ?? "User doesn't set location"}</Typography>
          </Stack>
          <Stack direction='row' gap={2}>
            <Icon>
              <Language />
            </Icon>
            <Typography>{blog ?? "User doesn't have Website"}</Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={6} padding={4}>
        <Stack direction='column' gap={1}>
          <Stack direction='row' gap={2}>
            <Icon>
              <Twitter />
            </Icon>
            <Typography>{twitterUsername ?? "User doesn't have Twitter linked"}</Typography>
          </Stack>
          <Stack direction='row' gap={2}>
            <Icon>
              <Domain />
            </Icon>
            <Typography>{company ?? "User doesn't belong to any Company"}</Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default RepositoryMetadata
