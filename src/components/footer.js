import React from 'react'

export const Footer = () => {
  const style={
    position: "relative",
    top: "80vh",
    width: "100%",
}
  return (
    <footer className="bg-dark text-light py-3" style={style}><p className="text-center">Copyright © MyTodosList.com</p></footer>
)
}
