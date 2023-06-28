import { useEffect, useRef } from "react"
import InfoCardMenuMobile from "./InfoCardMenuMobile.jsx"
import InfoCardMenuDesktop from "./InfoCardMenuDesktop.jsx"

const InfoCardMenu = ({ id, showMenu, setShowMenu }) => {
  const menuRef = useRef(null)

  const handleMenu = (event) => {
    event.stopPropagation()
    if (!menuRef.current.contains(event.target)) {
      setShowMenu(!showMenu)
    }
  }

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("click", handleMenu)
    } else {
      document.removeEventListener("click", handleMenu)
    }
    return () => {
      document.removeEventListener("click", handleMenu)
    }
  }, [showMenu])

  const handleCompleteTask = () => {
    alert("complete task")
    setShowMenu(false)
  }

  const handleDeleteTask = () => {
    alert("delete task")
    setShowMenu(false)
  }

  return (
    <div className={`menu-card ${showMenu ? "open" : ""}`}>
      <button onClick={handleMenu}>
        <img src="/images/assets/info-card/dots_menu.svg" alt="dots menu" />
      </button>
      <div ref={menuRef} className={`menu-card__wrapper ${showMenu ? "open" : ""}`}>
        <InfoCardMenuDesktop id={id} handleCompleteTask={handleCompleteTask} handleDeleteTask={handleDeleteTask} />
        <InfoCardMenuMobile id={id} handleCompleteTask={handleCompleteTask} handleDeleteTask={handleDeleteTask} />
      </div>
    </div>
  )
}

export default InfoCardMenu
