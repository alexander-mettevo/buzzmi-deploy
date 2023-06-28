import React from "react"
import CustomLink from "./CustomLink"

const PrimaryLink = ({ children, className, to, ...props }) => (
  <CustomLink to={to} className={"button_primary  btn-text " + className} {...props}>
    {children}
  </CustomLink>
)

export default PrimaryLink
