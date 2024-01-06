import CustomVideo from "./components/Custom VIdeo";

export default function Home() {
  return (
    <main>
      <section style={{ height: "100dvh" }}>
        <CustomVideo videoSource={"/hero-video.mp4"} />
      </section>
    </main>
  );
}
