import Image from "next/image";
import img1 from "@/public/images/1.jpg"
import img2 from "@/public/images/2.jpg"
const AboutComp = () => {
  return (
    <>
    <div>about Page</div>
    <Image src={img1} width="100" height="100" priority quality={100} alt="learn next image"/>
    <Image src={img2} alt="learn next image" placeholder="blur"/>
    </>
  )
}

export default AboutComp