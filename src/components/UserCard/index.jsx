import { CardMedia, Grid, Stack } from '@mui/material'
import React from 'react'

import Description from '../Description'
import RepositoryMetadata from '../RepositoryMetadata'
import RepositoryStats from '../RepositoryStats'

const imageStyles = { borderRadius: '50%' }

function UserCard (props) {
  const {
    name,
    created_at: createdAt,
    login,
    bio,
    avatar_url: avatarUrl,
    followers, following,
    public_repos: repositories,
    location, twitter_username: twitterUsername,
    company,
    blog
  } = props.user

  return (
    <Grid
      container
    >
      <Grid item xs={3}>
        <CardMedia
          style={imageStyles}
          component='img'
          image={avatarUrl}
          alt={name}
        />
      </Grid>
      <Grid item xs={9} style={{ marginTop: '20px' }}>
        <Stack sx={{ paddingX: '40px', gap: '8px' }}>
          <Description
            name={name}
            created_at={createdAt}
            login={login}
            bio={bio}
          />
          <RepositoryStats
            followers={followers}
            following={following}
            repositories={repositories}
          />
          <RepositoryMetadata
            twitterUsername={twitterUsername}
            location={location}
            company={company}
            blog={blog === '' ? null : blog}
          />
        </Stack>
      </Grid>
    </Grid>
  )
}

export default UserCard
