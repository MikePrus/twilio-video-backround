const showLocalVideo = async () => {
  const videoTrack = await Twilio.Video.createLocalVideoTrack({
    width: 640,
    height: 480,
    frameRate: 24,
  });

  document.getElementById("video").appendChild(videoTrack.attach());

  let img = new Image();
  img.src = "LifeMD-Zoom-BG-1.png";
  img.onload = async () => {
    const bg = new Twilio.VideoProcessors.VirtualBackgroundProcessor({
      assetsPath: "/",
      backgroundImage: img,
      maskBlurRadius: 5,
    });

    console.log(bg);

    await bg.loadModel();

    videoTrack.addProcessor(bg);
  };
};

showLocalVideo();
