'use client'
import React from 'react'

import CONST from '@/constants/index'
import './globals.css'
import Layout from '../components/layout'
import Extra from '../components/col-extra'
import Main from '../components/col-main'
import Sidebar from '../components/col-sidebar'
import useWindowSize from '@/hooks/useWindowSize'

function HomePage() {
  const size = useWindowSize()

  return (
    <Layout>
      <Sidebar flat={size.width < CONST.DESKTOP_SIZE}>sidebar</Sidebar>
      <Main>{JSON.stringify(size)}</Main>
      {size.width > CONST.TABLET_SIZE && <Extra>extra</Extra>}
    </Layout>
  )
}

export default HomePage
