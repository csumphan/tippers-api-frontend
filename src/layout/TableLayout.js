import React, { Component } from 'react'

import './TableLayout.css'
export const TableLayout = ({ children }) => {
  console.log('children', children)
  return (
  <div className='table-layout-main'>
    {children}
  </div>
)}

export const Header = ({ children }) => (
  <div className='table-layout-header'>
    {children}
  </div>
)

export const Title = ({ children }) => (
  <div className='table-layout-title'>
    {children}
  </div>
)

export const Body = ({ children }) => (
  <div>
    {children}
  </div>
)

TableLayout.Header = Header
TableLayout.Title = Title
TableLayout.Body = Body

export default TableLayout
