Stream = require('node-rtsp-stream')
stream = new Stream({
  name: 'name',
  streamUrl: 'rtsp://admin:Micros321@192.168.20.224/ONVIF/MediaInput?profile=def_profile2', //sesuai resolusi 320x180
  wsPort: 9999,
  ffmpegOptions: { // options untuk ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
})
/*
// streamUrl: 'rtsp://192.168.21.50/ONVIF/MediaInput?profile=2_def_profile1', OLD STREAM CCTV
stream = new Stream({
  name: 'name',
  streamUrl: 'rtsp://192.168.21.40/ONVIF/MediaInput?profile=1_def_profile1',
  wsPort: 9998,
  ffmpegOptions: { // options untuk ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
})*/


/*
 //untuk cek spesifikasi kamera
const onvif = require('node-onvif');

// Create an OnvifDevice object
let device = new onvif.OnvifDevice({
  xaddr: 'http://xxx.xxx.xx.xxx/onvif/device_service',
  user : 'username',
  pass : 'password'
});
// Initialize the OnvifDevice object
device.init().then(() => {
  // Get the UDP stream URL
  let url = device.getUdpStreamUrl();
  console.log(url);
  // Get Profile
  let profile = device.getCurrentProfile();
console.log(JSON.stringify(profile, null, '  '));
  //Get Profile list
  let usernya = device.getProfileList();
console.log(usernya);
}).catch((error) => {
  console.error(error);
});*/
