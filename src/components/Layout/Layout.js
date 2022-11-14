import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom'
import './Layout.scss';

export default function Layout() {
  return (
    <div className='layout'>
      <Sidebar />
      <div className="page">
{/*         <span className="tags tag html-open">&lt;html&gt;</span>
        <span className="tags tag body-open">&lt;body&gt;</span> */}
          <Outlet />
{/*         <span className="tags tag body-close">&lt;/body&gt;</span>
        <span className="tags tag html-close">&lt;/html&gt;</span> */}
      </div>
    </div>
  )
}
