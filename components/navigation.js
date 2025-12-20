import React from 'react'

import styles from './navigation.module.css'

import NavigationButton from './navigation-button'
import TextTitle from './text-title'

import {
  Twitter,
  Home,
  Explore,
  Notification,
  Messages,
  Bookmark,
  Lists,
  Profile,
  More,
  ProfileFill,
  BookmarkFill,
  MessagesFill,
  NotificationFill,
  ListsFill
} from './icons'
import SvgExplorerFill from '@/components/icons/ExplorerFill'
import SvgHomeFill from '@/components/icons/HomeFill'
import SvgNotificationFill from '@/components/icons/NotificationFill'
import SvgMessages from '@/components/icons/Messages'
import SvgMessagesFill from '@/components/icons/MessagesFill'
import SvgBookmarkFill from '@/components/icons/BookmarkFill'
import SvgListsFill from '@/components/icons/ListsFill'
import SvgProfileFill from '@/components/icons/ProfileFill'

const MENU = [
  {
    key: 'twitter',
    icon: <Twitter />,
    iconSelected: <Twitter />,
    title: '',
    notify: 0
  },
  {
    key: 'home',
    icon: <Home />,
    iconSelected: <SvgHomeFill />,
    title: 'Home',
    notify: 0
  },
  {
    key: 'explore',
    icon: <Explore />,
    iconSelected: <SvgExplorerFill />,
    title: 'Explore',
    notify: 0
  },
  {
    key: 'notification',
    icon: <Notification />,
    iconSelected: <SvgNotificationFill />,
    title: 'Notification',
    notify: 17
  },
  {
    key: 'messages',
    icon: <Messages />,
    iconSelected: <SvgMessagesFill />,
    title: 'Messages',
    notify: 0
  },
  {
    key: 'bookmark',
    icon: <Bookmark />,
    iconSelected: <SvgBookmarkFill />,
    title: 'Bookmark',
    notify: 0
  },
  {
    key: 'lists',
    icon: <Lists />,
    iconSelected: <SvgListsFill />,
    title: 'Lists',
    notify: 0
  },
  {
    key: 'profile',
    icon: <Profile />,
    iconSelected: <SvgProfileFill />,
    title: 'Profile',
    notify: 0
  },
  {
    key: 'more',
    icon: <More />,
    iconSelected: <More />,
    title: 'More',
    notify: 0
  }
]

function Navigation({ flat = false, selectedKey = 'home' }) {
  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat && menu.title.length > 0
        const selected = selectedKey === menu.key
        return (
          <NavigationButton
            key={menu.key}
            notify={menu.notify}
            selected={selectedKey === menu.key}>
            {selected ? menu.iconSelected : menu.icon}
            {showTitle && <TextTitle>{menu.title}</TextTitle>}
          </NavigationButton>
        )
      })}
    </nav>
  )
}

export default Navigation
