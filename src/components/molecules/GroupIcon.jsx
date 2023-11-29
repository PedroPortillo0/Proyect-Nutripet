import facebook  from "../../assets/img/icons/Facebook.png";
import twit from "../../assets/img/icons/Twitter.png";
import insta from "../../assets/img/icons/Instagram.png"
import Icon from "../atoms/Icon";

function GroupIcon() {
  return (
    <div className="flex w-1/2 gap-x-2">
      <Icon src={facebook}/>
      <Icon src={twit}/>
      <Icon src={insta}/>
    </div>
  )
}
export default GroupIcon;