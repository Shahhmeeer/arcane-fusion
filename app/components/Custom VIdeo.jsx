export default function CustomVideo({videoSource}) {
  return <video src={videoSource} autoPlay muted loop></video>
}