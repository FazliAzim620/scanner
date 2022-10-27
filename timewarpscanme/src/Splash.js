import { useNavigate } from "react-router-dom"
const Splash = () => {
  const navigate = useNavigate()
  window.setTimeout(function () {
    // window.location.href = `/home`
    navigate("/home")
  }, 3000)

  return (
    <div>
      <div className="splash">
        <div className="splashlogo">
          <img src="./logo.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Splash
