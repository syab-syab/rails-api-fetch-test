import React from 'react'
import { useState } from 'react'
import { Routes, Route  } from 'react-router-dom';
import ManagementColor from './ManagementColor'
import ManagementCaffeine from './ManagementCaffeine';

export default function Home() {

  return (
    <div id='home'>
      {/* ここに管理画面風のデザインを入れる */}
      {/* 各モデルごとに切り替えられるようにする */}
      {/* POST,EDIT,DELETEをこのページで完結できるようにする */}

      {/* いずれは他のモデルでもやるけどまずはcolorから */}
      <ManagementColor />
      {/* あとでルート別にコンポーネントを分ける */}
      {/* <Routes path='/'>
        <Route path=''>
          <ManagementColor />
        </Route>
        <Route path='manage-caffeine'>
          <ManagementCaffeine />
        </Route>
      </Routes> */}
    </div>
  )
}
