'use client'
import React from 'react'
import styled from 'styled-components'

const NotificationBar = styled.div `
    background: #141718;
    color: #FEFEFE;
    padding: 0.5rem 2rem ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.75rem;
    line-height: 1.25rem;
    font-weight: 600;

    @media(min-width: 768px) {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;

      > div {
        flex: 1;
        text-align: center;
      }
  }

  `

const CloseButton = styled.button `
  @media(min-width: 768px) {
    margin-left: auto;
  }
`

export default function Hero() {
  
  return (
    <NotificationBar>
      <div>        
        <span>30% off storewide — Limited time! </span>
        <button>
          <span>Shop Now</span>
          <span>Icon</span>
        </button> 
      </div>
      <button>X</button>
    </NotificationBar>
  )
}
